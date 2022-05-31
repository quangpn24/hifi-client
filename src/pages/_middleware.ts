import { NO_AUTH_PATHS } from 'constant';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import Utils from 'utils';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const url = req.nextUrl.clone();

  const accessToken = req.cookies['accessToken'];

  if (NO_AUTH_PATHS.includes(url.pathname)) {
    if (accessToken) {
      url.pathname = url.searchParams.get('redirect_url') ?? '/';
      return NextResponse.redirect(url);
    }
  } else if (!Utils.matchPublicPaths(url.pathname) && !accessToken) {
    url.pathname = '/auth/login';
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
