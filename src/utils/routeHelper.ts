import { PUBLIC_PATHS } from 'constant';

const routeHelper = {
  matchPublicPaths: (path: string) => {
    return (
      PUBLIC_PATHS.includes(path) ||
      PUBLIC_PATHS.findIndex((p) => p.includes('*') && path.startsWith(p)) !== -1
    );
  },
};

export default routeHelper;
