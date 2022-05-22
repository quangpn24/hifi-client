const DEFAULT_IMAGE =
  'https://firebasestorage.googleapis.com/v0/b/hifi-3ab1d.appspot.com/o/default.jpg?alt=media&token=ed84b493-6c5b-4a1e-ab6e-0b57c4da77af';

const NO_AUTH_PATHS = ['/auth/login', '/auth/register'];
const PUBLIC_PATHS = ['/', '/job-posts/*', '/companies/*'];
export { DEFAULT_IMAGE, NO_AUTH_PATHS, PUBLIC_PATHS };
