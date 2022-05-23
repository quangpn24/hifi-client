import dayjs from 'dayjs';
import moment from 'moment';

const dateTimeHelper = {
  timeAgo: (date: Date) => {
    return moment(date).fromNow();
  },
  convertMonthYearToDate: (monthYear: any) => {
    const { month, year } = monthYear;
    return new Date(year, month, 1);
  },
  convertReverseMonthYearToDate: (date?: Date) => {
    if (typeof date === 'string') {
      date = new Date(date);
    }
    return date && { month: date?.getMonth(), year: date?.getFullYear() };
  },
  showTimeline: (startDate: Date, endDate?: Date) => {
    const start = dayjs(startDate);
    const end = dayjs(endDate ?? new Date());

    return `${start.format('MMMM YYYY')} - ${end?.format('MMMM YYYY') ?? 'Present'} (${start.from(
      end
    )})`;
  },
};

export default dateTimeHelper;
