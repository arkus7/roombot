import { App } from '@slack/bolt';

import { configureActions } from './slack/actions';
import { configureEvents } from './slack/events';
import { configureMessageHandlers } from './slack/messages';
import { configureViews } from './slack/views';

export function configureApp(app: App): void {
  configureActions(app);
  configureEvents(app);
  configureMessageHandlers(app);
  configureViews(app);
}
