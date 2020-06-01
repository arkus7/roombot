import { App } from '@slack/bolt';

import { BUTTON_CLICK_ACTION_ID, buttonClickAction } from './buttonClick.action';

export function configureActions(app: App): void {
  app.action(BUTTON_CLICK_ACTION_ID, buttonClickAction);
}
