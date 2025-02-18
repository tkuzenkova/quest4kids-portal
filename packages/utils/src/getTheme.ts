import { cookies } from "next/headers";

const DARK_MODE = "DARK_MODE"

export async function getTheme() {
	const cookieStore = await cookies();
	const cookieDarkMode = cookieStore.get(DARK_MODE);

	const isDarkMode: boolean = cookieDarkMode?.value === "true";

	return { isDarkMode };
}
