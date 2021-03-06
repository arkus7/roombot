import { codeBlock } from '../../utils/formatting';
import { SubmitViewHandler } from '../../utils/types';

export const APP_HOME_MODAL_CALLBACK_ID = 'app_home_modal_callback';

export const appHomeModalSubmitHandler: SubmitViewHandler = async ({ ack, body, view, context, client }) => {
  await ack();

  await client.chat.postMessage({
    token: context.botToken,
    channel: body.user.id,
    text: codeBlock(JSON.stringify(view.state, null, 2))
  });
};
