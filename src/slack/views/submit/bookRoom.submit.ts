import { DateFormat } from '../../utils/dateFormat.enum';
import { date } from '../../utils/formatting';
import { SubmitViewHandler } from '../../utils/types';

export const BOOK_ROOM_MODAL_CALLBACK_ID = 'book_room_modal_callback';

export const bookRoomModalSubmitHandler: SubmitViewHandler = async data => {
  const { ack, view, client, context, body } = data;
  await ack();

  const state = view.state.values;
  const selectedDateString = state['date_picker']['date_picked']['selected_date'];
  const selectedHour = parseInt(state['hour_picker']['hour_picked']['selected_option']['value'], 10);
  const selectedMinutes = parseInt(state['minutes_picker']['minutes_picked']['selected_option']['value'], 10);
  const selectedDuration = parseFloat(state['duration_picker']['duration_picked']['selected_option']['value']);

  const selectedDate = new Date(selectedDateString);
  selectedDate.setHours(selectedHour, selectedMinutes);

  await client.chat.postMessage({
    token: context.botToken,
    channel: body.user.id,
    text: `Your meeting will take place on ${date(selectedDate, `${DateFormat.DateLongPretty} at ${DateFormat.Time}`)} and will take ${selectedDuration} hour(s).`
  });
};
