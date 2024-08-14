export type App = {
	readonly id: string;
	readonly title: string;
	readonly description: string;
	readonly image: string;
	readonly metadata: string[];
	readonly link?: string;
	readonly sourceCodeLink?: string;
	readonly assets?: Assets;
};

type Assets = {
	web: string[];
	mobile: string[];
};
