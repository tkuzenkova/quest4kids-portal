import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { logoutApi } from "./service";

export function useLogout() {
	const queryClient = useQueryClient();
	const router = useRouter();

	const { mutate: logout, isPending: isLoading } = useMutation({
		mutationFn: logoutApi,
		onSuccess: () => {
			queryClient.removeQueries();
			router.refresh();
		},
	});

	return { logout, isLoading };
}
