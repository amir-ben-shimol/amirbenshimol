import React from 'react';
import Link from 'next/link';

import { generalLinks } from '@/data/external-link';

const GeneralLinks = () => {
	return (
		<div className="flex flex-col">
			<h2 className="mb-2 text-xl font-bold text-foreground text-slate-700 dark:text-slate-300 sm:mb-4 sm:text-4xl">Others</h2>
			{generalLinks.map((generalLink) => (
				<Link key={generalLink.url} href={generalLink.url} className="mb-2 flex w-fit items-center sm:mb-3">
					<span className="ml-2 mr-6 h-2 w-2 rounded-full bg-slate-600 text-transparent dark:bg-slate-300">.</span>
					<span className="text-lg text-slate-700 underline decoration-blue-500 hover:decoration-blue-700 hover:decoration-[3px] dark:text-slate-300 sm:text-xl">
						{generalLink.label}
					</span>
				</Link>
			))}
		</div>
	);
};

export default React.memo(GeneralLinks);
