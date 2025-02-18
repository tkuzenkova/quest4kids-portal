import { getRandomTransparentColor } from "@/core/utils/common";
import { CakeIcon } from "@repo/ui";
import React from "react";

const PostsHeader: React.FC = () => {
	const color = getRandomTransparentColor();
	return (
		<div
			className="flex h-32 w-full flex-grow-[3] items-center justify-center text-white"
			style={{ backgroundColor: color }}
		>
			<CakeIcon className="h-20" />
		</div>
	);
};

export default PostsHeader;
