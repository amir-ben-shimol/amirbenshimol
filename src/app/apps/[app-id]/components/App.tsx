'use client';

import React, { useMemo, useRef } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
// import { Modal, ModalBody, ModalContent, ModalTrigger } from '@/ui/UIAnimatedModal';

import { cn } from '@/utils/class-name';
import { appsList } from '@/data/apps';
import { UISvg } from '@/ui/UISvg';
import { UIImage } from '@/ui/UIImage';
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

	const onScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: 'smooth' });
		} else {
			console.warn('Ref is null, unable to scroll to section');
		}
	};

	return (
		<div className="flex w-full flex-col items-center">
			<div className="flex w-full flex-col items-center">
				<div className="relative mb-6 h-[112px] w-[112px] sm:h-[192px] sm:w-[192px]">
					<UIImage className="rounded-3xl sm:rounded-[48px]" src={app.image} alt={app.title} layout="fill" objectFit="cover" />
				</div>
				<h1 className="leading-tighter font-heading mb-4 text-center text-5xl font-bold tracking-tighter md:text-6xl">{app.title}</h1>
				{app.longDescription ? (
					<p className="text mb-8 mt-4 text-left text-2xl tracking-tight md:text-3xl">
						{app.longDescription.split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br />
							</React.Fragment>
						))}
					</p>
				) : (
					<h2 className="mb-8 text-center text-2xl tracking-tight md:text-3xl">{app.description}</h2>
				)}
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

				{app.assets && (
					<div className="text-primary-600 instapaper_ignore mt-8 flex max-w-md cursor-pointer flex-wrap justify-center gap-4 text-xl font-semibold">
						<a className="text-blue-400 hover:text-blue-400 dark:hover:text-blue-300" onClick={() => onScrollToSection(assetsRef)}>
							Assets
						</a>
					</div>
				)}
			</div>

			{app.assets && (
				<div className={cn('flex gap-10 pt-32', app.assets.viewType === 'mobile' ? 'flex-wrap' : 'flex-col')} ref={assetsRef}>
					{app.assets.web.map((image, index) => (
						<div
							key={index}
							className={cn(
								'flex bg-slate-950 p-2 shadow-[0_0_20px_5px_rgba(128,128,128,0.6)] dark:shadow-[0_0_20px_5px_rgba(255,255,255,0.4)]',
								app.assets!.viewType === 'mobile' ? 'mx-auto rounded-[58px]' : 'rounded-xl',
							)}
						>
							<ImagePreview webImage={image} mobileImage={app.assets!.mobile?.[index]} viewType={app.assets!.viewType} />
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default React.memo(App);
