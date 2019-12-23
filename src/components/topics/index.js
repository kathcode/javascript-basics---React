import Comments from './Comments';
import EventLoop from './EventLoop';
import Scope from './Scope';
import Apply from './Apply';

export const topics = {
  eventLoop: { component: EventLoop, text: 'Event loop' },
  comments: { component: Comments, text: 'Comments' },
  scope: { component: Scope, text: 'Scope' },
  apply: { component: Apply, text: 'Apply' }
};