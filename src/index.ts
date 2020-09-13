import { App, ExpressReceiver, LogLevel } from '@slack/bolt';
import dotenv from 'dotenv';

import { configureApp } from './app';
import { calendar } from './calendar';

dotenv.config();

const receiver = new ExpressReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  receiver: receiver,
  logLevel: LogLevel.DEBUG,
});

calendar.authorize()
  .then(() => calendar.freeBusy({ startDate: new Date(2020, 8, 10), endDate: new Date(2020, 8, 20) }))
  .then((res) => console.log(res.data.calendars['primary']));

configureApp(app);

const PORT = process.env.PORT || 3000;

receiver.app.get('/', (req, res) => {
  const { code, state } = req.query;

  console.log(code, state);

  return res.json({ code, state: JSON.parse(state as string) });
});

app
  .start(PORT)
  .catch(console.error)
  .then(() => console.log(`⚡️ Bolt app is running on ${PORT}!`));
