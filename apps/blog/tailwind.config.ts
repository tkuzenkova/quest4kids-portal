// tailwind config is required for editor support

import sharedConfig from "@repo/tailwind-config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "content" | "presets"> = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"../../packages/ui/**/*{.js,.ts,.jsx,.tsx}",
	],
	presets: [sharedConfig],
};

export default config;
