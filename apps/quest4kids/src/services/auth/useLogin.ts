import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { loginApi } from "./service";

export const useLogin = () => {
	const router = useRouter();

	const { mutate: login, isPending: isLoading } = useMutation({
		mutationFn: loginApi,
		onSuccess: () => {
			router.refresh();
		},
		onError: () => {
			toast.error("Provided email or password are incorrect");
		},
	});

	return { login, isLoading };
};
