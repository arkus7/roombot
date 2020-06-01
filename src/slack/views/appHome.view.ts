import { View } from '@slack/types';

import { DIVIDER_BLOCK } from './blocks/divider.block';

export function appHomeView(): View {
  return {
    type: 'home',
    callback_id: 'home_view',

    /* body of the view */
    blocks: [
      {
        type: 'section',
        text: {
          'type': 'mrkdwn',
          'text': '*Welcome to your _App\'s Home_* :tada: :hehe:'
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
            text: {
              type: 'plain_text',
              text: 'Click me!'
            }
          }
        ]
      }
    ]
  };
}
