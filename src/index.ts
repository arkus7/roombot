import { App } from '@slack/bolt';
import dotenv from 'dotenv';

import { configureApp } from './app';

dotenv.config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

configureApp(app);

app
  .start(process.env.PORT || 3000)
  .catch(console.error)
  .then(() => console.log('⚡️ Bolt app is running!'));
