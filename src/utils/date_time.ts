import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';

export const timeAgo = (date: Date) => {
  TimeAgo.addDefaultLocale(en);
  const tg = new TimeAgo('en-US');
  return tg.format(date.getTime(), 'round-minute');
};
