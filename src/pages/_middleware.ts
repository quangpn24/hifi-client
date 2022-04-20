import { NextRequest, NextResponse, NextFetchEvent } from 'next/server';

const noAuthPaths = ['/auth/login', '/auth/register'];
const publicPaths = ['/'];
export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const url = req.nextUrl.clone();

  // console.log('URL: ', url);
  // Only rewrite requests to `/`, as _middleware on the `/pages` root will be executed in every request of the app.
  const accessToken = req.cookies['accessToken'];
  // console.log('AccessToken: ', accessToken);
  if (noAuthPaths.includes(url.pathname)) {
    if (accessToken) {
      url.pathname = url.searchParams.get('redirect_url') ?? '/';
      return NextResponse.redirect(url);
    }
  } else if (!publicPaths.includes(url.pathname)) {
    if (!accessToken) {
      url.pathname = url.searchParams.get('redirect_url') ?? '/auth/login';
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}
