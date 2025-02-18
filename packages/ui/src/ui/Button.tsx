import { Button as HeadlessuiButton } from "@headlessui/react";
import Link from "next/link";
import { ReactNode } from "react";

// TODO: Add variants for different button sizes and colors
type ButtonProps = {
	children: ReactNode;
	onClick?: () => void;
	ariaLabel?: string;
	className?: string;
	type?: "button" | "submit" | "reset";
	href?: string;
	variant?: "primary" | "secondary" | "danger";
	typeLink?: "soft" | "hard";
};

const Button = ({
	children,
	onClick,
	ariaLabel,
	className = "",
	type = "button",
	href,
	variant = "primary",
	typeLink = "soft",
}: ButtonProps) => {
	const baseStyles =
		"inline-flex cursor-pointer items-center gap-2 rounded-md px-5 py-2 text-base font-semibold shadow-inner ";
	const variantStyles = {
		primary:
			"text-white shadow-white/10 data-[hover]:bg-primary/80 bg-gradient-to-b from-primary to-primary/60",
		secondary:
			"bg-blue-500 text-white shadow-blue-500/50 data-[hover]:bg-blue-400",
		danger: "bg-red-500 text-white shadow-red-500/50 data-[hover]:bg-red-400",
	};

	const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

	return href && typeLink === "soft" ? (
		<Link aria-label={ariaLabel} className={combinedStyles} href={href}>
			{children}
		</Link>
	) : href && typeLink === "hard" ? (
		<a aria-label={ariaLabel} className={combinedStyles} href={href}>
			{children}
		</a>
	) : (
		<HeadlessuiButton
			aria-label={ariaLabel}
			className={combinedStyles}
			onClick={onClick}
			type={type}
		>
			{children}
		</HeadlessuiButton>
	);
};

export default Button;
