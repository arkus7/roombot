import { Middleware, SlackAction, SlackActionMiddlewareArgs, SlackEventMiddlewareArgs } from '@slack/bolt';

export type ActionHandler = Middleware<SlackActionMiddlewareArgs<SlackAction>>;
export type MessageHandler = Middleware<SlackEventMiddlewareArgs<'message'>>;
