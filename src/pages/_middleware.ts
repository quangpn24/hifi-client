import { NextRequest, NextResponse, NextFetchEvent } from 'next/server';

const noAuthPaths = ['/auth/login', '/auth/register'];
const publicPaths = ['/', '/job-posts'];
export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const url = req.nextUrl.clone();

  const accessToken = req.cookies['accessToken'];
  // if (noAuthPaths.includes(url.pathname)) {
  //   if (accessToken) {
  //     url.pathname = url.searchParams.get('redirect_url') ?? '/';
  //     return NextResponse.redirect(url);
  //   }
  // } else if (!publicPaths.includes(url.pathname)) {
  //   if (!accessToken) {
  //     url.pathname = url.searchParams.get('redirect_url') ?? '/auth/login';
  //     return NextResponse.redirect(url);
  //   }
  // }
  return NextResponse.next();
}
