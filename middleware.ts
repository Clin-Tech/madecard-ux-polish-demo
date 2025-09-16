// middleware.ts
import { NextResponse } from "next/server";
export const config = { matcher: ["/((?!_next|favicon.ico|robots.txt).*)"] };

export function middleware(req: Request) {
  if (process.env.NODE_ENV === "development") return NextResponse.next();
  const auth = req.headers.get("authorization") || "";
  const [user, pass] = Buffer.from(auth.split(" ")[1] || "", "base64")
    .toString()
    .split(":");
  if (
    user === process.env.BASIC_AUTH_USER &&
    pass === process.env.BASIC_AUTH_PASS
  )
    return NextResponse.next();
  return new NextResponse("Auth required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Protected"' },
  });
}
