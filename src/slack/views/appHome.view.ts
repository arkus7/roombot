import { View } from '@slack/types';

import { APP_HOME_BUTTON_CLICK_ACTION_ID } from '../actions/block/appHomeButtonClick.action';
import { BOOK_ROOM_BUTTON_CLICK_ACTION_ID } from '../actions/block/bookRoomButtonClick.action';
import { DIVIDER_BLOCK } from './blocks/divider.block';

export function appHomeView(): View {
  return {
    type: 'home',
    callback_id: 'home_view',
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '*Welcome to your _App\'s Home_* :tada:'
        }
      },
      DIVIDER_BLOCK,
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: 'This button won\'t do much for now but you can set up a listener for it using the `actions()` method and passing its unique `action_id`. See an example in the `examples` folder within your Bolt app.'
        }
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            action_id: APP_HOME_BUTTON_CLICK_ACTION_ID,
            text: {
              type: 'plain_text',
              text: 'Click me!'
            }
          },
          {
            type: 'button',
            action_id: BOOK_ROOM_BUTTON_CLICK_ACTION_ID,
            text: {
              type: 'plain_text',
              text: 'Book room modal (test)'
            }
          }
        ]
      }
    ]
  };
}
