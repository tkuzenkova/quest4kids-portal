"use client";

import { Button, InputField } from "@repo/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { taskFormValidation } from "./validation";

type FormValues = {
	email?: string;
	name?: string;
	lastName?: string;
};

type ChildFormProps = {
	// For edit form
	values?: FormValues;
};

export default function ChildForm({ values }: ChildFormProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: taskFormValidation,
		reValidateMode: "onBlur",
		shouldUnregister: false,
		defaultValues: { email: "" },
		values,
	});

	const onSubmit: SubmitHandler<FormValues> = data => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-[500px]">
			<InputField
				label="Email"
				id="email"
				type="email"
				placeholder="example@example.com"
				register={register("email")}
				error={errors.email?.message}
				isRequired
			/>

			<InputField
				label="Name"
				id="name"
				register={register("name")}
				error={errors.name?.message}
				description="Use your real name so people will recognize you."
				isRequired
			/>

			<InputField
				label="Last Name"
				id="lastName"
				register={register("lastName")}
				error={errors.lastName?.message}
			/>

			<Button type="submit">Add Child</Button>
		</form>
	);
}
