import stringHelper from './stringHelper';
import objectHelper from './objectHelper';
import colorHelper from './colorHelper';
import { PUBLIC_PATHS } from 'constant';
import dayjs from 'dayjs';
import dateTimeHelper from './dateTimeHelper';

const Utils = {
  matchPublicPaths(path: string) {
    return (
      PUBLIC_PATHS.includes(path) ||
      PUBLIC_PATHS.findIndex((p) => p.includes('*') && path.startsWith(p)) !== -1
    );
  },
};

export default Utils;
export { stringHelper, objectHelper, colorHelper, dateTimeHelper };
