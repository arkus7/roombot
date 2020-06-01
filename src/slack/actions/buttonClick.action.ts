import { channelLink, userLink } from '../utils/formatLinks';
import { ActionHandler } from '../utils/types';

export const BUTTON_CLICK_ACTION_ID = 'button_click';

export const buttonClickAction: ActionHandler = async (event) => {
  console.log(event);
  const { body, ack, say } = event;
  await ack();

  await say(`${userLink(body.user.id)} clicked the button on ${channelLink(body.channel?.id)}`);
};