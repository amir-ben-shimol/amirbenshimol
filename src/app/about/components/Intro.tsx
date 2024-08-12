/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const Into = () => {
	return (
		<div className="flex flex-col">
			<h2 className="text-5xl font-bold text-foreground text-slate-700 dark:text-slate-300 sm:text-6xl">About Amir Ben Shimol</h2>
			<p className="my-10 text-lg text-slate-700 dark:text-slate-300 sm:text-xl">
				I’m a software developer and open-sourcerer. I mostly code JavaScript.
				<br />I consult small-size startups with technology design or issues.
			</p>
		</div>
	);
};

export default React.memo(Into);
