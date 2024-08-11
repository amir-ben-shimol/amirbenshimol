import { AboutIntro } from '@/data/about-intro';
import React from 'react';

const Into = () => {
	return (
		<div className="flex flex-col">
			<h2 className="text-5xl font-bold text-foreground text-slate-700 dark:text-slate-300 sm:text-7xl">{AboutIntro.title}</h2>
			<p className="my-10 text-lg text-slate-700 dark:text-slate-300 sm:text-xl">{AboutIntro.description}</p>
		</div>
	);
};

export default React.memo(Into);
