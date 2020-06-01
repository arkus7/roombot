import { App, Middleware, SlackAction, SlackActionMiddlewareArgs } from '@slack/bolt';

import { BUTTON_CLICK_ACTION_ID, buttonClickAction } from './buttonClick';

export type ActionHandler = Middleware<SlackActionMiddlewareArgs<SlackAction>>;

export function configureActions(app: App) {
  app.action(BUTTON_CLICK_ACTION_ID, buttonClickAction);
}
