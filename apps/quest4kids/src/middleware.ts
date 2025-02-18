import { updateSession } from "@/core/utils/supabase/middleware";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
	return await updateSession(request);
}

export const config = {
	// Matcher ignoring `/_next/` and `/api/`
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

// import { NextRequest, NextResponse } from "next/server";

// export function middleware(req: NextRequest) {
// 	const token = req.cookies.get("auth_token")?.value;

// 	if (!token) {
// 		return NextResponse.redirect(new URL("/login", req.url));
// 	}

// 	return NextResponse.next();
// }

// export const config = {
// 	matcher: ["/dashboard/:path*", "/profile/:path*"],
// };
