"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext<{
	isDarkMode: boolean;
	toggleTheme: (isDarkTheme: boolean) => void;
}>({
	isDarkMode: false,
	toggleTheme: () => {},
});

export default function ThemeProvider({
	children,
	initialTheme,
}: {
	children: React.ReactNode;
	initialTheme: string;
}) {
	const [isDarkMode, setIsDarkMode] = useState(initialTheme === "dark");

	const toggleTheme = (isDarkTheme: boolean): void =>
		setIsDarkMode(isDarkTheme);

	return (
		<ThemeContext.Provider
			value={{
				toggleTheme,
				isDarkMode,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}
