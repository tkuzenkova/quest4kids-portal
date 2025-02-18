export const PAGE_PATH = {
	HOME: "/",
	AUTH: "/auth",
	SIGNUP: "/signup",

	POSTS: "/posts",
	POSTS_NEW: "/posts/add-new",
	POSTS_NEW_SERVER: "/posts/add-new-server",
	POSTS_EDIT: (idPost: string) => `/posts/${idPost}/edit`,

	DASHBOARD: "/dashboard",

	TASKS: "/tasks",
	TASKS_NEW: "/tasks/add-new",
	TASKS_EDIT: (idTask: string) => `/tasks/${idTask}/edit`,

	CHILDREN: "/children",
	CHILD_NEW: "/children/add-new",
	CHILD_EDIT: (idChild: string) => `/children/${idChild}/edit`,
};
