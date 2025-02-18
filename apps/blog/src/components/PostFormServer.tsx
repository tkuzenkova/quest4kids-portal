"use client";

import { PAGE_PATH } from "@/core/consts/page-path";
import { addPostAction } from "@/services/posts/actions";
import { Button, InputField } from "@repo/ui";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { postFormValidation } from "./validation";

export interface IPostFormValues {
	userId: number;
	title: string;
	body: string;
}

type PostFormServerProps = {
	// For edit form
	values?: IPostFormValues;
};

export default function PostFormServer({ values }: PostFormServerProps) {
	const {
		register,
		handleSubmit,
		formState: { errors, isLoading },
	} = useForm<IPostFormValues>({
		resolver: postFormValidation,
		reValidateMode: "onBlur",
		shouldUnregister: false,
		defaultValues: { userId: 2, title: "", body: "" },
		values,
	});

	const onSubmit = async (data: IPostFormValues) => {
		const result = await addPostAction(data);

		if (result.success) {
			toast("Post was successfully submitted");
			redirect(PAGE_PATH.POSTS);
		} else {
			toast("Post submission failed!");
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-[500px]">
			<InputField
				label="User ID"
				id="userId"
				type="userId"
				register={register("userId")}
				error={errors.userId?.message}
				isRequired
				isLoading={isLoading}
			/>

			<InputField
				label="Title"
				id="title"
				register={register("title")}
				error={errors.title?.message}
				description="Enter the title of the post"
				isRequired
				isLoading={isLoading}
			/>

			<InputField
				label="Post"
				id="body"
				register={register("body")}
				error={errors.body?.message}
				isRequired
				as="textarea"
				isLoading={isLoading}
			/>

			<Button type="submit">
				{isLoading ? "Sending..." : "Add New Post"}
			</Button>
		</form>
	);
}
