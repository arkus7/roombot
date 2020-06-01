import { BUTTON_CLICK_ACTION_ID } from '../actions/buttonClick.action';
import { userLink } from '../utils/formatLinks';
import { MessageHandler } from '../utils/types';

export const helloHandler: MessageHandler = async ({ message, say }) => {
  await say({
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `Hey there ${userLink(message.user)}!`,
        },
        accessory: {
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'Click Me',
          },
          action_id: BUTTON_CLICK_ACTION_ID,
        },
      },
    ],
    text: null,
  });
};
