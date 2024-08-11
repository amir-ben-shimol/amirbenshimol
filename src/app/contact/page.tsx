import React from 'react';
import PageWrapper from '@/wrappers/PageWrapper';
import { UIGradienteText } from 'src/components/UI/UIGradienteText';
import Link from 'next/link';

const Contact = () => {
	return (
		<PageWrapper className="flex flex-col">
			<h1 className="mb-5 text-5xl font-bold text-slate-700 dark:text-slate-300 sm:text-7xl md:text-nowrap">Contact</h1>
			<Link href="mailto:amir.benshi@gmail.com" className="group relative inline-block w-min">
				<UIGradienteText as="h2" className="h-8 w-min text-2xl sm:h-12 sm:text-4xl">
					amir.benshi@gmail.com
				</UIGradienteText>
				<span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 transform bg-gradient-to-r from-orange-700 via-blue-500 to-green-500 transition-transform duration-300 ease-in-out group-hover:scale-x-100 sm:h-1" />
			</Link>
		</PageWrapper>
	);
};

export default React.memo(Contact);
