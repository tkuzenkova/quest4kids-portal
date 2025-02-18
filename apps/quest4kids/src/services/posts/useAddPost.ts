import { IPostFormValues } from "@/core/types/posts";
import { useMutation } from "@tanstack/react-query";
import { postsService } from "./service";

export const useAddPost = () =>
	useMutation<IPostFormValues, Error, IPostFormValues>({
		mutationFn: postsService.addPost,
		onSuccess: data => {
			console.log("Post created:", data);
		},
		onError: error => {
			console.error("Error creating post:", error);
		},
	});
