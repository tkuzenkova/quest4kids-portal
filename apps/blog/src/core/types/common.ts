export type LangType = "en" | "uk";

export type ParamsType<T = string> = {
	[key: string]: T;
};
