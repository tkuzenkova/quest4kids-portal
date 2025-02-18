import { IPost } from "@/core/types/posts";
import { axiosInstance } from "../_common/axiosInstance";
import { API_PATH } from "../_common/consts";

const API = process.env.NEXT_PUBLIC_API_URL;

// Get the list of posts (for `generateStaticParams`)
export async function getPosts(): Promise<IPost[]> {
	const res = await axiosInstance.get(`${API}/${API_PATH.POSTS}`);
	return res.data;
}

// Get the post by ID
export async function getPost(postId: string): Promise<IPost> {
	const res = await axiosInstance.get(`${API}/${API_PATH.POSTS}/${postId}`);
	return res.data;
}
