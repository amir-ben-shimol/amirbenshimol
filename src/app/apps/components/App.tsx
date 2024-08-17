import React from 'react';
import type { App as TApp } from '@/types/ui/app';
import { UICardSpotlight } from '../../../components/ui/UICardSpotlight';

const App = (props: TApp) => {
	return (
		<UICardSpotlight className="flex flex-col items-center rounded-xl sm:flex-row">
			<div className="flex w-full gap-3">
				<div className="z-20 overflow-hidden rounded-xl sm:p-4">
					<img className="h-24 w-36 rounded-lg object-contain sm:h-28 sm:w-32" src={props.image} alt={props.title} />
				</div>
				<div className="flex w-full flex-col sm:w-5/6">
					<h2 className="z-20 mb-0.5 text-xl font-bold sm:text-3xl">{props.title}</h2>
					<span className="z-20 text-lg leading-tight text-gray-700 dark:text-gray-200/90 sm:text-xl sm:leading-tight">{props.description}</span>
					<div className="mt-3 hidden flex-wrap gap-1.5 opacity-90 sm:mt-3 sm:flex">
						{props.metadata.map((metadataLink) => (
							<img key={metadataLink} src={metadataLink} alt="npm downloads" className="h-5 w-auto" />
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
		</UICardSpotlight>
	);
};

export default React.memo(App);
