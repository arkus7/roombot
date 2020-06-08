import { GaxiosPromise } from 'gaxios';
import { calendar_v3, google } from 'googleapis';

import { authorizeGoogle } from './auth';

export class Calendar {
  private api: calendar_v3.Calendar;

  async authorize(): Promise<void> {
    const auth = await authorizeGoogle();
    this.api = google.calendar({ version: 'v3', auth});
  }
  
  async listEvents(): GaxiosPromise<calendar_v3.Schema$Events> {
    return this.api.events.list({
      calendarId: 'primary'
    });
  }
}
