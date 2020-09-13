import { App } from '@slack/bolt';

import { APP_HOME_BUTTON_CLICK_ACTION_ID, appHomeButtonClick } from './block/appHomeButtonClick.action';
import { BOOK_ROOM_BUTTON_CLICK_ACTION_ID, bookRoomButtonClick } from './block/bookRoomButtonClick.action';
import { BUTTON_CLICK_ACTION_ID, buttonClickAction } from './messages/buttonClick.action';

const BOOKING_DATE_PICKED_ACTION_ID = 'booking_date_picked';
export function configureActions(app: App): void {
  app.action(BUTTON_CLICK_ACTION_ID, buttonClickAction);
  app.action(APP_HOME_BUTTON_CLICK_ACTION_ID, appHomeButtonClick);
  app.action(BOOK_ROOM_BUTTON_CLICK_ACTION_ID, bookRoomButtonClick);
}
