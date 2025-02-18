"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTheme = getTheme;
const headers_1 = require("next/headers");
const DARK_MODE = "DARK_MODE";
async function getTheme() {
    const cookieStore = await (0, headers_1.cookies)();
    const cookieDarkMode = cookieStore.get(DARK_MODE);
    const isDarkMode = cookieDarkMode?.value === "true";
    return { isDarkMode };
}
