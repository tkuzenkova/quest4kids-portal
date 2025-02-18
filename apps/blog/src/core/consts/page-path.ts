export const PAGE_PATH = {
	HOME: "/",
	POSTS: "/posts",
	POSTS_NEW: "/posts/add-new",
	POSTS_NEW_SERVER: "/posts/add-new-server",
	POSTS_EDIT: (idPost: string) => `/posts/${idPost}/edit`,
};
