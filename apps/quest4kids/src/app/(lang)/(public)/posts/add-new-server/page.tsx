import { Heading } from "@repo/ui";
import PostFormServer from "../_components/PostFormServer";

export default function AddPostPage() {
	return (
		<>
			<Heading type={1}>Add Post</Heading>
			<PostFormServer />
		</>
	);
}
