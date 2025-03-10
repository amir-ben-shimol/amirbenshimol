import React from 'react';
import { externalLinks } from '@/data/external-link';
import { UILinkPreview } from '@/ui/UILinkPreview';

const ExternalLinks = () => {
	return (
		<div className="mt-10 flex flex-col">
			<h2 className="mb-2 text-xl font-bold text-foreground text-slate-700 dark:text-slate-300 sm:mb-4 sm:text-4xl">Links</h2>
			{externalLinks.map((socialMedia) => (
				<div key={socialMedia.url} className="mb-2 flex w-fit items-center sm:mb-3">
					<span className="ml-2 mr-6 h-2 w-2 rounded-full bg-slate-600 text-transparent dark:bg-slate-300">.</span>

					<UILinkPreview
						className="text-lg text-slate-700 underline decoration-blue-500 hover:decoration-blue-700 hover:decoration-[3px] dark:text-slate-300 sm:text-xl"
						url={socialMedia.url}
					>
						{socialMedia.label}
					</UILinkPreview>
				</div>
			))}
		</div>
	);
};

export default React.memo(ExternalLinks);
