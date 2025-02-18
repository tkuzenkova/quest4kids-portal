import { Heading } from "@repo/ui";
import PostForm from "../../../components/PostForm";

export default function AddPostPage() {
	return (
		<>
			<Heading type={1}>Add Post</Heading>
			<PostForm />
		</>
	);
}
