import PostsList from "@/components/PostsList";
import { PAGE_PATH } from "@/core/consts/page-path";
import { getPosts } from "@/services/posts/api";
import { Button, Heading } from "@repo/ui";

export const dynamic = "force-static";
export const revalidate = 3600;

export default async function PostsPage() {
	const posts = await getPosts();

	return (
		<>
			<div className="flex items-center justify-between px-6">
				<Heading>Posts</Heading>
				<div>
					<Button href={PAGE_PATH.POSTS_NEW}>Add New Post</Button>
					<Button href={PAGE_PATH.POSTS_NEW_SERVER} className="ml-2">
						Add New Post - Server Action
					</Button>
				</div>
			</div>
			<div className="m-auto max-w-7xl">
				<PostsList posts={posts} />
			</div>
		</>
	);
}
