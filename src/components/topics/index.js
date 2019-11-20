import Comments from './comments';
import Time from './time';
import Scope from './scope';

export const topics = {
  time: { component: Time, text: 'The time in Javascript' },
  comments: { component: Comments, text: 'Comments' },
  scope: { component: Scope, text: 'Scope' }
}