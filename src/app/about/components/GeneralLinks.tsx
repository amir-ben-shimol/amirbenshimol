import React from 'react';
import Link from 'next/link';

import { generalLinks } from '@/data/external-link';

const GeneralLinks = () => {
	return (
		<div className="flex flex-col">
			<h2 className="mb-2 text-xl font-bold text-foreground sm:mb-4 sm:text-4xl">Others</h2>
			{generalLinks.map((generalLink) => (
				<Link
					key={generalLink.url}
					href={generalLink.url}
					className="mb-2 w-fit text-lg underline decoration-blue-500 hover:decoration-blue-700 hover:decoration-[3px] sm:mb-3 sm:text-xl"
				>
					<span>{generalLink.label}</span>
				</Link>
			))}
		</div>
	);
};

export default React.memo(GeneralLinks);
