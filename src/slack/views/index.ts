import { App } from '@slack/bolt';

import { APP_HOME_MODAL_CALLBACK_ID, appHomeModalSubmitHandler } from './submit/appHomeModal.submit';

export function configureViews(app: App): void {
  app.view(APP_HOME_MODAL_CALLBACK_ID, appHomeModalSubmitHandler);
}
