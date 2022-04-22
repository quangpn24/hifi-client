import { GetServerSideProps, GetServerSidePropsContext } from 'next';

export function requireAuth(gss: GetServerSideProps) {
  return async (context: GetServerSidePropsContext) => {
    const { req, res } = context;
    let token;
    if (req.headers.cookie) {
      console.log(req.headers.cookie);
      const tokens = req.headers.cookie.split(';');
      token = tokens.find((t) => t.trim().startsWith('accessToken'));
    }
    if (!token) {
      // Redirect to login page
      return {
        redirect: {
          source: req.url,
          destination: '/auth/login',
          permanent: false,
        },
      };
    }

    return await gss(context); // Continue on to call `getServerSideProps` logic
  };
}
