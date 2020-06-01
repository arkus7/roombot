import { App } from '@slack/bolt';

import { APP_HOME_BUTTON_CLICK_ACTION_ID, appHomeButtonClick } from './block/appHomeButtonClick.action';
import { BUTTON_CLICK_ACTION_ID, buttonClickAction } from './messages/buttonClick.action';

export function configureActions(app: App): void {
  app.action(BUTTON_CLICK_ACTION_ID, buttonClickAction);
  app.action(APP_HOME_BUTTON_CLICK_ACTION_ID, appHomeButtonClick);
}
