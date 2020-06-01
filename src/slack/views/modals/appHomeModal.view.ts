import { View } from '@slack/types';

import { APP_HOME_MODAL_CALLBACK_ID } from '../submit/appHomeModal.submit';

export function appHomeModalView(): View {
  return {
    type: 'modal',
    callback_id: APP_HOME_MODAL_CALLBACK_ID,
    title: {
      type: 'plain_text',
      text: 'Modal title'
    },
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: 'Welcome to a modal with _blocks_'
        },
        accessory: {
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'Click me!'
          },
          action_id: 'button_abc'
        }
      },
      {
        type: 'input',
        block_id: 'input_c',
        label: {
          type: 'plain_text',
          text: 'What are your hopes and dreams?'
        },
        element: {
          type: 'plain_text_input',
          action_id: 'dreamy_input',
          multiline: true
        }
      }
    ],
    submit: {
      type: 'plain_text',
      text: 'Submit'
    }
  };
}
