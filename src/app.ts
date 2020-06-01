import { App } from '@slack/bolt';

import { configureActions } from './slack/actions';
import { configureMessageListeners } from './slack/messages';

export function configureApp(app: App): void {
  configureMessageListeners(app);
  configureActions(app);
}
