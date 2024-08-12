import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { UIGradienteText } from '@/ui/UIGradienteText';
import { UIHoverBorderGradient } from '@/ui/UIHoverBorderGradient';
import { UISvg } from '@/ui/UISvg';
import { UITextGenerateEffect } from '@/ui/UITextGenerateEffect';

const Intro = () => {
	return (
		<div className="mt-20 flex h-fit flex-col items-center px-2">
			<UIHoverBorderGradient
				containerClassName="rounded-full"
				as="div"
				className="z-20 flex items-center justify-center bg-white p-0 text-black dark:bg-black dark:text-white"
			>
				<Image src="/images/profile.jpg" alt="Profile Picture" width={150} height={150} className="z-20 rounded-full" />
			</UIHoverBorderGradient>
			<UIGradienteText as="h1">Amir Ben Shimol</UIGradienteText>
			<UITextGenerateEffect className="z-20" words="Software Developer & Open-Sourcerer" />
			<div className="mt-4 flex flex-col items-center gap-4 xs:flex-row sm:mt-6">
				<Link
					href="https://github.com/amir-ben-shimol"
					target="_blank"
					className="z-20 flex w-full items-center justify-center gap-2 rounded-full bg-slate-500 px-3 py-1 hover:bg-slate-600 sm:w-fit sm:px-8 sm:py-3"
				>
					<UISvg name="github" className="h-5 w-5" />
					<span className="text-lg text-white sm:text-xl">Code</span>
				</Link>

				<Link
					href="https://www.linkedin.com/in/amir-ben-shimol-533169210/"
					target="_blank"
					className="z-20 flex w-full items-center justify-center gap-2 rounded-full bg-blue-800 px-3 py-1 hover:bg-blue-950 sm:w-fit sm:px-8 sm:py-3"
				>
					<UISvg name="linkedin" className="h-5 w-5" />
					<span className="text-lg text-white sm:text-xl">LinkedIn</span>
				</Link>
			</div>
		</div>
	);
};

export default React.memo(Intro);
