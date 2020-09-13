import { App } from '@slack/bolt';

import { APP_HOME_MODAL_CALLBACK_ID, appHomeModalSubmitHandler } from './submit/appHomeModal.submit';
import { BOOK_ROOM_MODAL_CALLBACK_ID, bookRoomModalSubmitHandler } from './submit/bookRoom.submit';

export function configureViews(app: App): void {
  app.view(APP_HOME_MODAL_CALLBACK_ID, appHomeModalSubmitHandler);
  app.view(BOOK_ROOM_MODAL_CALLBACK_ID, bookRoomModalSubmitHandler);
}
