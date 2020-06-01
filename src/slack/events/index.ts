import { App } from '@slack/bolt';

import { APP_HOME_OPENED_EVENT, appHomeOpenedHandler } from './appHomeOpened.event';

export function configureEvents(app: App): void {
  app.event(APP_HOME_OPENED_EVENT, appHomeOpenedHandler());
}
