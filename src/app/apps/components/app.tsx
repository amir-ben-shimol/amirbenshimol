import React from 'react';
import type { App as TApp } from '@/types/ui/app';
import { UICardSpotlight } from '../../../components/ui/UICardSpotlight';

const App = (props: TApp) => {
	return (
		<UICardSpotlight className="flex items-center gap-3 rounded-xl border-2">
			<div className="z-20 overflow-hidden rounded-xl p-4">
				<img className="h-12 w-12 rounded-lg sm:h-24 sm:w-24" src={props.image} alt={props.title} />
			</div>
			<div className="flex w-3/4 flex-col">
				<h2 className="z-20 mb-0.5 text-xl font-bold sm:text-3xl">{props.title}</h2>
				<span className="text-md z-20 leading-tight text-gray-700 dark:text-gray-200/90 sm:text-xl sm:leading-tight">{props.description}</span>
				<div className="mt-3 flex flex-wrap gap-1.5 opacity-90 sm:mt-3">
					{props.metadata.map((metadataLink) => {
						// const techColor = getTechBgColor(tech);

						return <img key={metadataLink} src={metadataLink} alt="npm downloads" className="h-5 w-auto" />;
					})}
				</div>
			</div>
		</UICardSpotlight>
	);
};

export default React.memo(App);
