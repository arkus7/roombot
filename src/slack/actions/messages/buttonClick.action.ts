import { channelLink, userLink } from '../../utils/format';
import { MessageActionHandler } from '../../utils/types';

export const BUTTON_CLICK_ACTION_ID = 'button_click';

export const buttonClickAction: MessageActionHandler = async ({ body, ack, say }) => {
  await ack();

  await say(`${userLink(body.user.id)} clicked the button on ${channelLink(body.channel?.id)}`);
};
