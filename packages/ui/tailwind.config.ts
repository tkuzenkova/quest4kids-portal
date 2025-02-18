import sharedConfig from "@repo/tailwind-config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "presets" | "content"> = {
	content: ["./src/**/*.{js,ts,jsx,tsx}", "../../apps/**/*.{js,ts,jsx,tsx}"],
	presets: [sharedConfig],
};

export default config;
