"use client";

import { ThemeContext } from "@repo/ui";
import { useContext } from "react";

export default function ThemeComponent() {
	const { isDarkMode } = useContext(ThemeContext);

	return (
		<p>
			Example of using the theme context:{" "}
			{isDarkMode ? "Dark Theme" : "Light Theme"}
		</p>
	);
}
