import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { UIHoverBorderGradient } from 'src/components/UI/UIHoverBorderGradient';
import UISvg from 'src/components/UI/UISvg';
import { UITextGenerateEffect } from 'src/components/UI/UITextGenerateEffect';

const Intro = () => {
	return (
		<div className="mt-20 flex h-fit flex-col items-center">
			<UIHoverBorderGradient
				containerClassName="rounded-full"
				as="div"
				className="z-20 flex items-center justify-center bg-white p-0 text-black dark:bg-black dark:text-white"
			>
				<Image src={'/images/profile.jpg'} alt="Profile Picture" width={150} height={150} className="z-20 rounded-full" />
			</UIHoverBorderGradient>
			<h1 className="bg-300% font-heading z-20 mt-10 h-16 animate-gradient bg-gradient-to-r from-orange-700 via-blue-500 to-green-500 bg-clip-text text-center text-5xl font-bold text-transparent sm:h-24 sm:text-7xl">
				Amir Ben Shimol
			</h1>
			<UITextGenerateEffect duration={2} className="z-20" words="Full-Time cheese developer" />
			<div className="mt-4 flex items-center gap-4 sm:mt-6">
				<Link
					href="https://google.com"
					className="z-20 flex items-center gap-2 rounded-full bg-slate-500 px-3 py-1 hover:bg-slate-600 sm:px-8 sm:py-3"
				>
					<UISvg name="github" className="h-5 w-5" />
					<span className="text-lg text-white sm:text-xl">Github</span>
				</Link>

				<Link
					href="https://google.com"
					className="z-20 flex items-center gap-2 rounded-full bg-blue-800 px-3 py-1 hover:bg-blue-950 sm:px-8 sm:py-3"
				>
					<UISvg name="linkedin" className="h-5 w-5" />
					<span className="text-lg text-white sm:text-xl">LinkedIn</span>
				</Link>
			</div>
		</div>
	);
};

export default React.memo(Intro);
