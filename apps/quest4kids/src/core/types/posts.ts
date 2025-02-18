export interface IPost {
	id: number;
	title: string;
	image: string;
	body: string;
}

export interface IPostFormValues {
	userId: number;
	title: string;
	body: string;
}
