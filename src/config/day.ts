import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'; // import plugin
import weekday from 'dayjs/plugin/weekday';
import localeData from 'dayjs/plugin/localeData';

dayjs.extend(relativeTime); // use plugin
dayjs.extend(weekday);
dayjs.extend(localeData);
