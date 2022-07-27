import { NextResponse } from "next/server";

export const middleware = (request) => {
  return NextResponse.redirect(new URL("/meetups", request.url));
};

export const config = {
  matcher: "/",
};
