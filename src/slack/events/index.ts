import { App } from '@slack/bolt';

import { appHomeOpenedHandler } from './appHomeOpened.event';

export function configureEvents(app: App): void {
  app.event('app_home_opened', appHomeOpenedHandler());
}
