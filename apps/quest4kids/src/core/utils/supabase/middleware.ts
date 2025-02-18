import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/core/consts/routs";
import { GeoLocationType } from "@/core/types/geoLocation";
import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { COOKIES, PAGE_PATH } from "../../consts";

async function getGeoLocation(ip: string): Promise<GeoLocationType> {
	// Check for local IP addresses
	if (
		ip === "::1" ||
		ip.startsWith("192.168.") ||
		ip.startsWith("10.") ||
		ip.startsWith("172.16.")
	) {
		return { status: "fail", message: "local IP address", query: ip };
	}

	const response = await fetch(`http://ip-api.com/json/${ip}`);
	const data = await response.json();
	return data;
}

export async function updateSession(request: NextRequest) {
	let supabaseResponse = NextResponse.next({
		request,
	});

	const supabase = createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				getAll() {
					return request.cookies.getAll();
				},
				setAll(cookiesToSet) {
					cookiesToSet.forEach(({ name, value, options }) =>
						request.cookies.set(name, value),
					);
					supabaseResponse = NextResponse.next({
						request,
					});
					cookiesToSet.forEach(({ name, value, options }) =>
						supabaseResponse.cookies.set(name, value, options),
					);
				},
			},
		},
	);

	// Get user's IP address
	const ip =
		request.headers.get("x-forwarded-for") ||
		request.headers.get("host") ||
		"";
	const geo = await getGeoLocation(ip);

	// Set location in cookies
	supabaseResponse.cookies.set(COOKIES.USER_LOCATION, JSON.stringify(geo));

	// Do not run code between createServerClient and
	// supabase.auth.getUser(). A simple mistake could make it very hard to debug
	// issues with users being randomly logged out.

	// IMPORTANT: DO NOT REMOVE auth.getUser()

	const {
		data: { user },
	} = await supabase.auth.getUser();

	const isPrivateRoute = PRIVATE_ROUTES.some(route =>
		request.nextUrl.pathname.startsWith(route),
	);

	const isPublicRoute = PUBLIC_ROUTES.some(route =>
		request.nextUrl.pathname.startsWith(route),
	);

	// if (!user && !request.nextUrl.pathname.startsWith("/")) {
	// 	// no user, potentially respond by redirecting the user to the login page
	// 	const url = request.nextUrl.clone();
	// 	url.pathname = PAGE_PATH.HOME;
	// 	return NextResponse.redirect(url);
	// }

	if (!user && isPrivateRoute) {
		const url = request.nextUrl.clone();
		url.pathname = PAGE_PATH.AUTH;
		return NextResponse.redirect(url);
	}

	if (user && (isPublicRoute || request.nextUrl.pathname === "/")) {
		const url = request.nextUrl.clone();
		url.pathname = PAGE_PATH.DASHBOARD;
		return NextResponse.redirect(url);
	}

	// IMPORTANT: You *must* return the supabaseResponse object as it is.
	// If you're creating a new response object with NextResponse.next() make sure to:
	// 1. Pass the request in it, like so:
	//    const myNewResponse = NextResponse.next({ request })
	// 2. Copy over the cookies, like so:
	//    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
	// 3. Change the myNewResponse object to fit your needs, but avoid changing
	//    the cookies!
	// 4. Finally:
	//    return myNewResponse
	// If this is not done, you may be causing the browser and server to go out
	// of sync and terminate the user's session prematurely!

	return supabaseResponse;
}
