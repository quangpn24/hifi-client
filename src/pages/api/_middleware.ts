import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const role = req.headers.get('authorization');

  console.log('Middleware!', role);
  // if (['user', 'admin'].includes(role)) {
  //   return new Response(JSON.stringify({ message: 'Not authenticated.' }), {
  //     status: 401,
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }

  return NextResponse.next();
}
