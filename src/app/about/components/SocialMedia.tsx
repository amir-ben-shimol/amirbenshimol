import { socialMedia } from '@/data/external-link';
import Link from 'next/link';
import React from 'react';
import { UILinkPreview } from 'src/components/UI/UILinkPreview';

const SocialMedia = () => {
	return (
		<div className="mt-10 flex flex-col">
			<h2 className="mb-2 text-xl font-bold text-foreground sm:mb-4 sm:text-4xl">Links</h2>
			{socialMedia.map((socialMedia) => (
				<Link
					key={socialMedia.url}
					href={socialMedia.url}
					className="mb-2 w-fit text-lg underline decoration-blue-500 hover:decoration-blue-700 hover:decoration-[3px] sm:mb-3 sm:text-xl"
				>
					<UILinkPreview url={socialMedia.url}>{socialMedia.label}</UILinkPreview>
				</Link>
			))}
		</div>
	);
};

export default React.memo(SocialMedia);
