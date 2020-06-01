import { App } from '@slack/bolt';

import { hello } from './hello';

export function configureMessageListeners(app: App): void {
  app.message('hello', hello);
}
