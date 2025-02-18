"use client";

import { useLogout } from "@/services/auth/useLogout";
import { Button } from "@repo/ui";

function Logout({ text }: { text: string }) {
	const { logout, isLoading } = useLogout();

	return <Button onClick={logout}>{text}</Button>;
}

export default Logout;
