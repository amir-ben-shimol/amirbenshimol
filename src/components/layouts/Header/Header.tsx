'use client';

import React from 'react';
import { headerNavigationElemets } from '../../../lib/data/navigation';
import NavElement from './NavElement';
import { useTheme } from 'next-themes';

const Header = () => {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<header className="fixed left-0 top-0 z-50 flex w-full items-center justify-center bg-slate-100/70 px-2 py-4 backdrop-blur-md dark:bg-gray-950/70 sm:px-6">
			<div className="flex w-full max-w-[1300px] items-center justify-between">
				{headerNavigationElemets[0] && <NavElement {...headerNavigationElemets[0]} />}

				<div className="flex items-center gap-3 sm:gap-8">
					{headerNavigationElemets.slice(1).map((navItem, index) => (
						<NavElement key={index} {...navItem} />
					))}
					<button type="button" className="hidden xxxs:block" onClick={toggleTheme}>
						<span className="text-xl">{theme === 'dark' ? '🌞' : '🌚'}</span>
					</button>
				</div>
			</div>
		</header>
	);
};

export default React.memo(Header);
