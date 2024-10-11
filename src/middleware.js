import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  //console.log("middleware executed...");

  const authtoken = request.cookies.get("authToken")?.value;
  //console.log(authtoken);
  if(
     request.nextUrl.pathname === '/api/login' ||
    request.nextUrl.pathname === '/api/users'
  ){
    return;
  }
   
  

  const logginpath = request.nextUrl.pathname == '/signUp' || request.nextUrl.pathname == '/login';
  if(logginpath){
    if(authtoken){
      return NextResponse.redirect(new URL('/', request.url));
    }
  } else{

    if(!authtoken){
      if(request.nextUrl.pathname.startsWith("/api")){
        return NextResponse.json(
          {
            message:"accsess denied",
            success:false,
          },
          {
            status:401,
          }
        )
      }
      return NextResponse.redirect(new URL("/login", request.url));
    }
    else{

    }
  }
  // return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/login',
    '/signUp',
    '/showtask',
    '/addtask',
    '/api/:path*',
  ],
}
