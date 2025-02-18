"use client";

import { useUser } from "@/services/auth/useUser";
import Image from "next/image";

export default function UserAvatar() {
	const { user, isLoading } = useUser();

	return (
		<div className="flex items-center gap-2">
			<span className="text-slate-100">
				{user?.user_metadata?.full_name}
			</span>
			<Image
				src={
					user?.user_metadata?.avatar_url ||
					"/default-avatar-512.webp"
				}
				alt={user?.user_metadata?.full_name || "User Avatar"}
				width={30}
				height={30}
				className="rounded-full shadow-md"
			/>
		</div>
	);
}
