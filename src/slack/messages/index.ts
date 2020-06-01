import { App } from '@slack/bolt';

import { helloHandler } from './hello.message';

export function configureMessageHandlers(app: App): void {
  app.message('hello', helloHandler);
}
