"use server";

import { IPostFormValues } from "@/core/types/posts";
import { postsService } from "./service";

export async function addPostAction(data: IPostFormValues) {
	const result = await postsService.addPost(data);

	return { success: !!result.id };
}
