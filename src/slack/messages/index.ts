import { App, Middleware, SlackEventMiddlewareArgs } from '@slack/bolt';

import { hello } from './hello';

export type MessageHandler = Middleware<SlackEventMiddlewareArgs<'message'>>

export function configureMessageListeners(app: App): void {
  app.message('hello', hello);
}
