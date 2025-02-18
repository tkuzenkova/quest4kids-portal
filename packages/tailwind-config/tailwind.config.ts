import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Config = {
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "../../apps/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
};
export default config;