import type React from 'react';

export type Blog = {
	readonly title: string;
	readonly description: string;
	readonly date: Date;
	readonly readingTime: string;
	readonly path: string;
	readonly contentElement: React.ReactNode;
};
