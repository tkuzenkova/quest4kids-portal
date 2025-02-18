"use client";

import { COOKIES } from "@/core/consts/cookies";
import { setCookie } from "@/core/utils/cookies";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LocaleSwitcher() {
	const pathname = usePathname();
	const redirectedPathname = (locale: any) => {
		if (!pathname) return "/";

		setCookie(COOKIES.NEXT_LOCALE, locale);

		const segments = pathname.split("/");
		segments[1] = locale;
		return segments.join("/");
	};

	const i18n = {
		locales: ["en", "uk"],
		defaultLocale: "en",
	};

	return (
		<div>
			<ul className="flex items-center justify-start">
				{i18n.locales.map(locale => {
					const isActive = locale === pathname.split("/")[1];

					return (
						<li
							key={locale}
							className={clsx(
								"shadow-soft-2xl mr-2 h-6 w-6 rounded bg-gradient-to-tl from-red-500 to-yellow-400 bg-center fill-current text-center text-gray-100",
								isActive
									? "pointer-events-none cursor-none opacity-70"
									: "hover:text-gray-200",
							)}
						>
							<Link href={redirectedPathname(locale)}>
								{locale}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
