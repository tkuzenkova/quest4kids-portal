import clsx from "clsx";
import React from "react";

interface CardProps {
	children: React.ReactNode;
	className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
	return (
		<div
			className={clsx(
				`rounded-2xl bg-white px-7 py-5 text-gray-900 shadow-md ${className}`,
				`dark:bg-gray-800 dark:text-gray-100`,
			)}
		>
			{children}
		</div>
	);
};

export default Card;
