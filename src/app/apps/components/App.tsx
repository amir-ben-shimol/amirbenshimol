import React from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import type { App as TApp } from '@/types/ui/app';
import { UICardSpotlight } from '@/ui/UICardSpotlight';
import { routes } from '@/routes/index';
import { UIImage } from '@/ui/UIImage';

const App = (props: TApp) => {
	return (
		<UICardSpotlight className="rounded-xl">
			<Link className="flex flex-col items-center sm:flex-row" href={`${routes.apps.path}/${props.id}`}>
				<div className="flex w-full gap-3">
					<div className="z-20 overflow-hidden rounded-3xl sm:p-4">
						<UIImage
							className="h-24 w-36 rounded-3xl object-contain sm:h-28 sm:w-32"
							width={100}
							height={100}
							src={props.image}
							alt={props.title}
						/>
					</div>
					<div className="flex w-full flex-col sm:w-5/6">
						<h2 className="z-20 mb-0.5 text-xl font-bold sm:text-3xl">{props.title}</h2>
						<span className="z-20 text-lg leading-tight text-gray-700 dark:text-gray-200/90 sm:text-xl sm:leading-tight">{props.description}</span>
						<div className="mt-3 hidden flex-wrap gap-1.5 opacity-90 sm:mt-3 sm:flex">
							{props.metadata.map((metadataLink) => (
								<img key={metadataLink} src={metadataLink} alt="meta link" className="h-5 w-auto" />
							))}
						</div>
					</div>
				</div>
				<div className="mt-3 flex flex-wrap gap-1.5 self-start opacity-90 sm:mt-3 sm:hidden">
					{props.metadata.map((metadataLink) => (
						<img key={metadataLink} src={metadataLink} alt="npm downloads" className="h-5 w-auto" />
					))}
				</div>
				<hr className="my-14 w-full border border-slate-300/70 opacity-65 dark:border-slate-700/70 sm:hidden" />
			</Link>
		</UICardSpotlight>
	);
};

export default React.memo(App);
