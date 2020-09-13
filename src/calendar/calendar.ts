import { GaxiosPromise } from 'gaxios';
import { calendar_v3, google } from 'googleapis';

import { authorizeGoogle, OAuth2Client } from './auth';

export class Calendar {
  private api: calendar_v3.Calendar;
  private auth: OAuth2Client;

  async authorize(): Promise<void> {
    this.auth = await authorizeGoogle();
    this.api = google.calendar({ version: 'v3', auth: this.auth });
  }

  async listEvents(): GaxiosPromise<calendar_v3.Schema$Events> {
    return this.api.events.list({
      calendarId: 'primary'
    });
  }

  async freeBusy(options: { startDate: Date, endDate: Date }): GaxiosPromise<calendar_v3.Schema$FreeBusyResponse> {
    return this.api.freebusy.query({
      oauth_token: this.auth.credentials.access_token,
      requestBody: {
        timeMin: options.startDate.toISOString(),
        timeMax: options.endDate.toISOString(),
        items: [{
          id: 'primary'
        }]
      }
    });
  }
}
