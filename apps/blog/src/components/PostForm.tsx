"use client";

import { PAGE_PATH } from "@/core/consts/page-path";
import { useAddPost } from "@/services/posts/useAddPost";
import { Button, InputField } from "@repo/ui";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { postFormValidation } from "./validation";

export interface IPostFormValues {
	userId: number;
	title: string;
	body: string;
}

type PostFormProps = {
	// For edit form
	values?: IPostFormValues;
};

export default function PostForm({ values }: PostFormProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IPostFormValues>({
		resolver: postFormValidation,
		reValidateMode: "onBlur",
		shouldUnregister: false,
		defaultValues: { userId: 2, title: "", body: "" },
		values,
	});

	const { mutate: addPost, isPending, isSuccess } = useAddPost();

	const onSubmit: SubmitHandler<IPostFormValues> = (
		post: IPostFormValues,
	) => {
		addPost(post);
	};

	useEffect(() => {
		if (isSuccess) {
			toast("Post was successfully submitted");
			redirect(PAGE_PATH.POSTS);
		}
	}, [reset, isSuccess]);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-[500px]">
			<InputField
				label="User ID"
				id="userId"
				type="userId"
				register={register("userId")}
				error={errors.userId?.message}
				isRequired
				isLoading={isPending}
			/>

			<InputField
				label="Title"
				id="title"
				register={register("title")}
				error={errors.title?.message}
				description="Enter the title of the post"
				isRequired
				isLoading={isPending}
			/>

			<InputField
				label="Post"
				id="body"
				register={register("body")}
				error={errors.body?.message}
				isRequired
				as="textarea"
				isLoading={isPending}
			/>

			<Button type="submit">
				{isPending ? "Sending..." : "Add New Post"}
			</Button>
		</form>
	);
}
