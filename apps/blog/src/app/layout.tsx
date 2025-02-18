import { ReactQueryProvider, ThemeProvider } from "@repo/ui";
import "@repo/ui/styles.css";
import { getTheme } from "@repo/utils";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Blog",
	description: "Blog",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { isDarkMode } = await getTheme();

	const theme = isDarkMode ? "dark" : "light";

	return (
		<html lang="en" className={`${theme}`}>
			<body
				className={`dark:bg-dark-900 bg-slate-50 text-slate-900 antialiased dark:text-white`}
			>
				<ReactQueryProvider>
					<ThemeProvider initialTheme={theme}>
						{children}
					</ThemeProvider>
				</ReactQueryProvider>
			</body>
		</html>
	);
}
