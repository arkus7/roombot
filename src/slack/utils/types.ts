import { Middleware, SlackAction, SlackActionMiddlewareArgs, SlackEventMiddlewareArgs } from '@slack/bolt';

export type ActionHandler = Middleware<SlackActionMiddlewareArgs<SlackAction>>;
export type EventHandler<EventType extends string = string> = Middleware<SlackEventMiddlewareArgs<EventType>>
export type MessageHandler = EventHandler<'message'>;
