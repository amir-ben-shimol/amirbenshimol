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
					<div className="relative z-20 mb-6 h-[72px] w-[72px] sm:h-[96px] sm:w-[96px]">
						<UIImage className="rounded-3xl" layout="fill" objectFit="cover" src={props.image} alt={props.title} />
					</div>

					<div className="flex flex-1 flex-col">
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
