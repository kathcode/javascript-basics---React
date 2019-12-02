import Comments from './comments';
import EventLoop from './EventLoop';
import Scope from './scope';

export const topics = {
  eventLoop: { component: EventLoop, text: 'Event loop' },
  comments: { component: Comments, text: 'Comments' },
  scope: { component: Scope, text: 'Scope' }
}