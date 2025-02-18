"use client";

import { ISignupFormValues } from "@/core/types/auth";
import { useSignup } from "@/services/auth/useSignup";
import { Button, InputField } from "@repo/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { singUpFormValidation } from "./validation";

export default function SignupForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISignupFormValues>({
		resolver: singUpFormValidation,
		reValidateMode: "onBlur",
		mode: "onChange",
		defaultValues: {
			fullName: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const { signup, isLoading } = useSignup();

	const onSubmit: SubmitHandler<ISignupFormValues> = (
		values: ISignupFormValues,
	) => {
		signup(values);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="mx-auto flex w-full flex-col items-start gap-5"
		>
			<InputField
				label="Full Name"
				id="fullName"
				register={register("fullName")}
				error={errors.fullName?.message}
				isRequired
				isLoading={isLoading}
			/>

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
				description="Password needs a minimum of 6 characters"
				type="password"
				isRequired
				isLoading={isLoading}
			/>

			<InputField
				label="Confirm Password"
				id="confirmPassword"
				register={register("confirmPassword")}
				error={errors.confirmPassword?.message}
				type="password"
				isRequired
				isLoading={isLoading}
			/>

			<Button type="submit">
				{isLoading ? "Sending..." : "Create Account"}
			</Button>
		</form>
	);
}
