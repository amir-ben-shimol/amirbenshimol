import type React from 'react';

export type Blog = {
	readonly id: string;
	readonly title: string;
	readonly description: string;
	readonly date: Date;
	readonly readingTime: string;
	readonly contentElement: React.ReactNode;
};
