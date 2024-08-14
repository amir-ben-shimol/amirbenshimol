'use client';

import React, { useMemo, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
// import { Modal, ModalBody, ModalContent, ModalTrigger } from '@/ui/UIAnimatedModal';

import { appsList } from '@/data/apps';
import { UISvg } from '@/ui/UISvg';
import ImagePreview from './ImagePreview';

const App = () => {
	const params = useParams();
	const assetsRef = useRef<HTMLDivElement>(null);

	const appId = Array.isArray(params?.['app-id']) ? params['app-id'][0] : params?.['app-id'];

	const app = useMemo(() => {
		return appsList.find((app) => app.id === appId);
	}, [appId]);

	if (!app) {
		return <div>App not found</div>;
	}

	const onScrollToSection = (ref: React.RefObject<HTMLDivElement>, offset = 0) => {
		if (ref.current) {
			// Scroll into view with smooth behavior
			ref.current.scrollIntoView({ behavior: 'smooth' });

			// Adjust the position by the desired offset
			window.scrollBy({
				top: -offset, // Negative offset to scroll up by the desired amount
				behavior: 'smooth',
			});
		} else {
			console.warn('Ref is null, unable to scroll to section');
		}
	};

	return (
		<div className="flex w-full flex-col items-center">
			<div className="flex h-[calc(100vh-145px)] w-full flex-col items-center">
				<div className="mb-3 overflow-hidden rounded-[48px]">
					<Image src={app.image} alt={app.title} width={224} height={224} />
				</div>
				<h1 className="leading-tighter font-heading mb-4 text-center text-5xl font-bold tracking-tighter md:text-6xl">{app.title}</h1>
				<h2 className="mb-8 text-center text-2xl tracking-tight md:text-3xl">{app.description}</h2>
				<div className="mt-4 flex flex-col items-center gap-4 xs:flex-row sm:mt-6">
					{app.sourceCodeLink && (
						<Link
							href={app.sourceCodeLink}
							target="_blank"
							className="z-20 flex w-full items-center justify-center gap-2 rounded-full bg-slate-500 px-3 py-1 hover:bg-slate-600 sm:w-fit sm:px-8 sm:py-3"
						>
							<UISvg name="github" className="h-5 w-5" />
							<span className="text-lg text-white sm:text-xl">Code</span>
						</Link>
					)}

					{app.link && (
						<Link
							href={app.link}
							target="_blank"
							className="z-20 flex w-full items-center justify-center gap-2 rounded-full bg-green-800 px-3 py-1 text-white hover:bg-green-950 sm:w-fit sm:px-8 sm:py-3"
						>
							<UISvg name="globe" className="h-5 w-5" />
							<span className="text-nowrap text-lg text-white sm:text-xl">Visit site</span>
						</Link>
					)}
				</div>

				<div className="text-primary-600 instapaper_ignore mt-8 flex max-w-md flex-wrap justify-center gap-4 text-xl font-semibold">
					<a className="hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300" onClick={() => onScrollToSection(assetsRef, 1000)}>
						Images
					</a>
					<a className="hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">Images</a>
					<a className="hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">Images</a>
					<a className="hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">Images</a>
				</div>
			</div>

			{app.assets && (
				<div className="flex flex-col gap-10" ref={assetsRef}>
					{app.assets.web.map((asset, index) => (
						<div
							key={index}
							className="rounded-xl bg-slate-950 p-2 shadow-[0_0_20px_5px_rgba(128,128,128,0.6)] dark:shadow-[0_0_20px_5px_rgba(255,255,255,0.4)]"
						>
							<ImagePreview webImage={asset} mobileImage={app.assets?.mobile[index] ?? ''} alt={app.title} />
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default React.memo(App);
