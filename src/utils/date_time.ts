import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import moment from 'moment';

export const timeAgo = (date: Date) => {
  return moment(date).fromNow();
};
