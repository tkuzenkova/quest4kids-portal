"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

export default function NavigationLink({
	href,
	...rest
}: ComponentProps<typeof Link>) {
	const pathname = usePathname();
	const firstSegment = pathname.split("/").filter(Boolean)[0] || "/";
	const firstHrefSegment =
		href.toString().split("/").filter(Boolean)[0] || "/";

	const isActive = firstSegment === firstHrefSegment;

	return (
		<Link
			aria-current={isActive ? "page" : undefined}
			className={clsx(
				"inline-block px-2 py-3 transition-colors",
				isActive
					? "font-bold text-white"
					: "text-white hover:text-gray-200",
			)}
			href={href}
			{...rest}
		/>
	);
}
