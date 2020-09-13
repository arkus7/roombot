import { View } from '@slack/types';

import { BOOK_ROOM_MODAL_CALLBACK_ID } from '../submit/bookRoom.submit';

export function bookRoomModal(): View {
  const hours = hourOptions({ count: 10, startingFrom: 8 });
  const minutes = minutesOptions({ interval: 5 });
  const durations = durationOptions({ maxDurationInHours: 12, intervalInHours: 0.5 });

  return {
    type: 'modal',
    callback_id: BOOK_ROOM_MODAL_CALLBACK_ID,
    title: {
      type: 'plain_text',
      text: 'Book a room',
    },
    close: {
      type: 'plain_text',
      text: 'Cancel',
      emoji: true
    },
    submit: {
      type: 'plain_text',
      text: 'Book a room',
      emoji: true
    },
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: ':calendar: Pick a date',
          emoji: true
        }
      },
      {
        type: 'input',
        block_id: 'date_picker',
        label: {
          type: 'plain_text',
          text: 'Pick a date for the meeting',
        },
        element: {
          type: 'datepicker',
          action_id: 'date_picked',
          placeholder: {
            type: 'plain_text',
            text: 'Select a date',
          }
        }
      },
      {
        type: 'input',
        block_id: 'hour_picker',
        label: {
          type: 'plain_text',
          text: 'Pick a hour for the meeting'
        },
        element: {
          type: 'static_select',
          action_id: 'hour_picked',
          placeholder: {
            type: 'plain_text',
            text: 'Select an hour for the meeting'
          },
          options: hours
        }
      },
      {
        type: 'input',
        block_id: 'minutes_picker',
        label: {
          type: 'plain_text',
          text: 'Pick the minutes for the meeting'
        },
        element: {
          type: 'static_select',
          action_id: 'minutes_picked',
          placeholder: {
            type: 'plain_text',
            text: 'Select the minutes for the meeting'
          },
          options: minutes
        }
      },
      {
        type: 'input',
        block_id: 'duration_picker',
        label: {
          type: 'plain_text',
          text: 'Pick the duration for the meeting'
        },
        element: {
          type: 'static_select',
          action_id: 'duration_picked',
          placeholder: {
            type: 'plain_text',
            text: 'Select the duration for the meeting'
          },
          options: durations
        }
      },
    ],
  };

  function hourOptions(options: { count: number, startingFrom: number }) {
    const { count, startingFrom } = options;
    return Array(Math.min(count, 100)).fill(null).map((_, i) => ({
      text: {
        type: 'plain_text' as const,
        text: `${i + startingFrom}`,
        emoji: false
      },
      value: `${i + startingFrom}`
    }));
  }

  function minutesOptions(options: { interval: number }) {
    const { interval } = options;
    return Array(Math.min(60 / interval, 100)).fill(null).map((_, i) => ({
      text: {
        type: 'plain_text' as const,
        text: `${(i * interval < 10) ? `0${i * interval}` : i * interval}`,
        emoji: false
      },
      value: `${i * interval}`
    }));
  }

  function durationOptions(options: { maxDurationInHours: number, intervalInHours: number }) {
    const { maxDurationInHours, intervalInHours } = options;
    return Array(Math.min(maxDurationInHours / intervalInHours, 100)).fill(null).map((_, i) => ({
      text: {
        type: 'plain_text' as const,
        text: `${(i + 1) * intervalInHours} hour(s)`,
        emoji: false
      },
      value: `${(i + 1) * intervalInHours}`
    }));
  }
}

