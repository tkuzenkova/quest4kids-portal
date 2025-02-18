import { PAGE_PATH } from "@/core/consts/page-path";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { signupApi } from "./service";

export const useSignup = () => {
	const router = useRouter();

	const { mutate: signup, isPending: isLoading } = useMutation({
		mutationFn: signupApi,
		onSuccess: () => {
			toast.success("Account was successfully created");
			router.replace(PAGE_PATH.AUTH);
		},
		onError: error => {
			toast.error(error.message);
		},
	});

	return { signup, isLoading };
};
