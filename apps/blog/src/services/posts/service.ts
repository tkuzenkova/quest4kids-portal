import { IPostFormValues } from "@/core/types/posts";
import { API_PATH } from "../_common/consts";
import { request } from "../_common/request";

// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
type PostId = string;

export const postsService = {
	getPosts: () => {
		// await delay(1000);
		const options = {
			method: "GET",
			url: API_PATH.POSTS,
		};

		return request(options);
	},
	getPost: () => {
		// fetch user from the server by id
	},
	addPost: (post: IPostFormValues) => {
		console.log(post);

		const options = {
			method: "POST",
			url: API_PATH.POSTS,
			body: JSON.stringify(post),
		};

		return request(options);
	},
	updatePost: () => {
		// update user in the server
	},
	deletePost: () => {
		// delete user from the server
	},
};
