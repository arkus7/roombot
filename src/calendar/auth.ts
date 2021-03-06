import fs from 'fs';
import { google } from 'googleapis';
import path from 'path';
import readline from 'readline';

export type OAuth2Client = typeof google.auth.OAuth2.prototype;
export type OAuthCredentials = typeof google.auth.OAuth2.prototype.credentials;

const TOKEN_PATH = path.join(__dirname, 'token.json');

const SCOPES = [
  'https://www.googleapis.com/auth/calendar.readonly'
];

export async function authorizeGoogle(): Promise<OAuth2Client> {
  const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
  const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
  const redirectUri = process.env.GOOGLE_OAUTH_REDIRECT_URI;

  const oAuthClient = new google.auth.OAuth2({
    clientSecret,
    clientId,
    redirectUri,
  });

  let credentials: OAuthCredentials = null;
  try {
    credentials = await loadCredentials();
  } catch (error) {
    console.error('Error while loading stored token: ', error, 'Getting a new one...');
    credentials = await getAccessToken(oAuthClient);
  }
  oAuthClient.setCredentials(credentials);

  return oAuthClient;
}

function loadCredentials(): Promise<OAuthCredentials> {
  return new Promise((resolve, reject) => {
    fs.readFile(TOKEN_PATH, (err, tokenString) => {
      if (err) {
        return reject(err);
      }
      return resolve(JSON.parse(tokenString.toString()));
    });
  });
}

function getAccessToken(oAuthClient: OAuth2Client): Promise<OAuthCredentials> {
  const authUrl = oAuthClient.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent',
    state: JSON.stringify({
      team: 'assd',
      user: 'asdasdasd'
    })
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve, reject) => {
    rl.question('Enter the code from that page here: ', (code) => {
      oAuthClient.getToken(code, (err, token) => {
        if (err) {
          console.error('Error retrieving access token', err);
          return reject(err);
        }
        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
          if (err) {
            console.error(err);
            return reject(err);
          }
          console.log('Token stored to', TOKEN_PATH);
          resolve(token);
        });
      });
    });
  });
}
