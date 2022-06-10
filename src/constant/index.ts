const DEFAULT_IMAGE =
  'https://firebasestorage.googleapis.com/v0/b/hifi-3ab1d.appspot.com/o/default.jpg?alt=media&token=ed84b493-6c5b-4a1e-ab6e-0b57c4da77af';

const NO_AUTH_PATHS = ['/auth/login', '/auth/register'];
const PUBLIC_PATHS = ['/', '/job-posts/*', '/companies/*', '/payroll', '/resume-builder'];
const APPLICATION_STATUS_MAP = new Map([
  [
    'ALL',
    {
      key: 'ALL',
      text: 'All',
      color: 'primary',
    },
  ],
  [
    'NEW',
    {
      key: 'NEW',
      text: 'Pending Review',
      color: 'lime',
    },
  ],
  [
    'IN_PROGRESS',
    {
      key: 'IN_PROGRESS',
      text: 'In Progress',
      color: 'processing',
    },
  ],
  [
    'HIRED',
    {
      key: 'HIRED',
      text: 'Hired',
      color: 'success',
    },
  ],
  [
    'UNSUITABLE',
    {
      key: 'UNSUITABLE',
      text: 'Unsuitable',
      color: 'default',
    },
  ],
]);

const JOBSEEKER_STATUS = new Map([
  [
    'I_AM_NOT_INTERESTED_IN_JOB',
    {
      label: "I'm not open to opportunities",
      value: 'I_AM_NOT_INTERESTED_IN_JOB',
      status: 'Not Looking',
    },
  ],
  [
    'OPEN_FOR_OPPORTUNITIES',
    {
      label: "I'm open to opportunities",
      value: 'OPEN_FOR_OPPORTUNITIES',
      status: 'Open to Opportunities',
    },
  ],
  [
    'I_AM_LOOKING_FOR_JOB',
    {
      label: "I'm actively looking for job",
      value: 'I_AM_LOOKING_FOR_JOB',
      status: 'Actively Looking',
    },
  ],
]);
export { DEFAULT_IMAGE, NO_AUTH_PATHS, PUBLIC_PATHS, APPLICATION_STATUS_MAP, JOBSEEKER_STATUS };
