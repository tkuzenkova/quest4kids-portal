import { JSX } from "react";

type HeadingProps = {
	children: React.ReactNode;
	type?: 1 | 2 | 3 | 4 | 5 | 6;
};

const headingSizes = {
	1: "text-4xl mb-6",
	2: "text-3xl mb-4",
	3: "text-2xl mb-2",
	4: "text-xl mb-2",
	5: "text-lg mb-1",
	6: "text-base mb-1",
};

export default function Heading({ children, type = 2 }: HeadingProps) {
	const Tag = `h${type}` as keyof JSX.IntrinsicElements;
	const sizeClass = headingSizes[type];

	return <Tag className={`${sizeClass} font-bold`}>{children}</Tag>;
}
