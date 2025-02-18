import { IPost } from "@/core/types/posts";
import { shakeAnimation } from "@/core/utils/animation/animation";
import { getRandomDate } from "@/core/utils/date";
import { Motion } from "@repo/ui";
import { format } from "date-fns";
import Link from "next/link";
import PostsHeader from "./PostHeader";

const PostsList = ({ posts }: { posts: IPost[] }) => {
	return (
		<div className="grid gap-6 p-6 md:grid-cols-3">
			{posts?.map((post: IPost) => {
				const date = getRandomDate();
				return (
					<Link key={post.id} href={`/posts/${post.id}`}>
						<Motion animation={shakeAnimation} whileHover="hover">
							<div className="dark:bg-dark-800 flex h-72 flex-col overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg">
								<PostsHeader />
								<div className="flex flex-grow-[7] flex-col justify-between p-4 text-slate-600 dark:text-slate-300">
									<p className="text-primary text-xs font-bold uppercase">
										Children
									</p>
									<h2 className="mt-2 text-lg font-semibold">
										{post.title}
									</h2>
									<div className="mt-4 text-xs text-slate-400">
										{format(date, "MM/dd/yyyy")}
									</div>
								</div>
							</div>
						</Motion>
					</Link>
				);
			})}
		</div>
	);
};

export default PostsList;
