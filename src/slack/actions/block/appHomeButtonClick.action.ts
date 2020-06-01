import { BlockActionHandler } from '../../utils/types';
import { appHomeModalView } from '../../views/modals/appHomeModal.view';

export const APP_HOME_BUTTON_CLICK_ACTION_ID = 'app_home_button_click';

export const appHomeButtonClick: BlockActionHandler = async ({ body, ack, client, context }) => {
  await ack();

  await client.views.open({
    token: context.botToken,
    trigger_id: body.trigger_id,
    view: appHomeModalView()
  });
};
