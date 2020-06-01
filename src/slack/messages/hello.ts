import { BUTTON_CLICK_ACTION_ID } from '../actions/buttonClick';
import { MessageHandler } from '../types';
import { userLink } from '../utils/formatLinks';

export const hello: MessageHandler = async ({ message, say }) => {
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
