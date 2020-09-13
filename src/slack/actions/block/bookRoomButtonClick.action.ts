import { BlockActionHandler } from '../../utils/types';
import { bookRoomModal } from '../../views/modals/bookRoom.view';

export const BOOK_ROOM_BUTTON_CLICK_ACTION_ID = 'book_room_click';

export const bookRoomButtonClick: BlockActionHandler = async ({ body, ack, client, context }) => {
  await ack();

  await client.views.open({
    token: context.botToken,
    trigger_id: body.trigger_id,
    view: bookRoomModal()
  });
};
