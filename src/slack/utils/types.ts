import {
  BlockAction,
  InteractiveMessage,
  Middleware,
  SlackAction,
  SlackActionMiddlewareArgs,
  SlackEventMiddlewareArgs,
  SlackViewAction,
  SlackViewMiddlewareArgs,
  ViewClosedAction,
  ViewSubmitAction,
} from '@slack/bolt';

export type ActionHandler<ActionType extends SlackAction = SlackAction> = Middleware<SlackActionMiddlewareArgs<ActionType>>;
export type MessageActionHandler = ActionHandler<InteractiveMessage>;
export type BlockActionHandler = ActionHandler<BlockAction>;

export type EventHandler<EventType extends string = string> = Middleware<SlackEventMiddlewareArgs<EventType>>
export type MessageHandler = EventHandler<'message'>;

export type ViewHandler<ViewActionType extends SlackViewAction = SlackViewAction> = Middleware<SlackViewMiddlewareArgs<ViewActionType>>;
export type SubmitViewHandler = ViewHandler<ViewSubmitAction>;
export type ClosedViewHandler = ViewHandler<ViewClosedAction>;
