import stringHelper from './stringHelper';
import objectHelper from './objectHelper';
import colorHelper from './colorHelper';
import { PUBLIC_PATHS } from 'constant';
import dayjs from 'dayjs';

const Utils = {
  renameProperty(obj: any, oldName: any, newName: string) {
    if (typeof obj !== 'object') return;
    if (obj.hasOwnProperty(oldName)) {
      delete Object.assign(obj, { [newName]: obj[oldName] })[oldName];
    }
  },
  convertMonthYearToDate(monthYear: any) {
    const { month, year } = monthYear;
    return new Date(year, month, 1);
  },
  convertReverseMonthYearToDate(date?: Date) {
    if (typeof date === 'string') {
      date = new Date(date);
    }
    return date && { month: date?.getMonth(), year: date?.getFullYear() };
  },
  showTimeline(startDate: Date, endDate?: Date) {
    const start = dayjs(startDate);
    const end = dayjs(endDate ?? new Date());

    return `${start.format('MMMM YYYY')} - ${end?.format('MMMM YYYY') ?? 'Present'} (${start.from(
      end
    )})`;
  },
  matchPublicPaths(path: string) {
    return (
      PUBLIC_PATHS.includes(path) ||
      PUBLIC_PATHS.findIndex((p) => p.includes('*') && path.startsWith(p)) !== -1
    );
  },
};

export default Utils;
export { stringHelper, objectHelper, colorHelper };
