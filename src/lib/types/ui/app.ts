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
	readonly viewType: 'web' | 'mobile';
	readonly web: ImageType[];
	readonly mobile?: ImageType[];
};

export type ImageType = {
	readonly source: string;
	readonly alt: string;
	readonly width: number;
	readonly height: number;
};
