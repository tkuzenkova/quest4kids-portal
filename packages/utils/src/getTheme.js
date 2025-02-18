var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { cookies } from "next/headers";
const DARK_MODE = "DARK_MODE";
export function getTheme() {
    return __awaiter(this, void 0, void 0, function* () {
        const cookieStore = yield cookies();
        const cookieDarkMode = cookieStore.get(DARK_MODE);
        const isDarkMode = (cookieDarkMode === null || cookieDarkMode === void 0 ? void 0 : cookieDarkMode.value) === "true";
        return { isDarkMode };
    });
}
