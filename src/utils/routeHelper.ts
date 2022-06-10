import { PUBLIC_PATHS } from 'constant';

const routeHelper = {
  matchPublicPaths: (path: string) => {
    const tmp = path.split('/')[0];
    return (
      PUBLIC_PATHS.includes(path) ||
      PUBLIC_PATHS.findIndex((p) => p.includes('*') && p.startsWith(tmp)) !== -1
    );
  },
};

export default routeHelper;
