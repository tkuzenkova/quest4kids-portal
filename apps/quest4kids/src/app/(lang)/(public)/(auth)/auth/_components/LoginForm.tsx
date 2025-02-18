"use client";

import { ILoginFormValues } from "@/core/types/auth";
import { useLogin } from "@/services/auth/useLogin";
import { Button, InputField } from "@repo/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginFormValidation } from "./validation";

export default function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILoginFormValues>({
		resolver: loginFormValidation,
		reValidateMode: "onBlur",
		mode: "onChange",
		defaultValues: { email: "", password: "" },
	});

	const { login, isLoading } = useLogin();

	const onSubmit: SubmitHandler<ILoginFormValues> = (
		values: ILoginFormValues,
	) => {
		login(values);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="mx-auto flex w-full flex-col items-start gap-5"
		>
			<InputField
				label="Email"
				id="email"
				register={register("email")}
				error={errors.email?.message}
				isRequired
				isLoading={isLoading}
			/>

			<InputField
				label="Password"
				id="password"
				register={register("password")}
				error={errors.password?.message}
				type="password"
				isRequired
				isLoading={isLoading}
			/>

			<Button type="submit">{isLoading ? "Sending..." : "Login"}</Button>
		</form>
	);
}
