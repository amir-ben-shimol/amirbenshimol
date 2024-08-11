import React from 'react';
import { headerNavigationElemets } from '@/data/navigation';
import NavElement from './NavElement';
import { useTheme } from 'next-themes';

type Props = {
	readonly isOpen: boolean;
};

const HamburgerMenu = (props: Props) => {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};
	return (
		<div className="fixed inset-0 z-10">
			<div
				className={`absolute right-0 top-0 h-[20px] w-[20px] origin-top-right transform ${
					props.isOpen ? 'scale-0 animate-expand' : 'animate-collapse scale-50'
				} bg-slate-100/70 backdrop-blur-md dark:bg-gray-950/70`}
			/>
			{props.isOpen && (
				<div className="animate-fadeIn relative left-8 top-32 z-50 flex w-min flex-col gap-4 opacity-0 delay-300">
					{headerNavigationElemets.slice(1).map((navItem, index) => (
						<NavElement className="w-min text-nowrap border-b-4 !text-7xl" labelClassName="text-2xl" textOnly key={index} {...navItem} />
					))}
					<button type="button" className="z-20 hidden self-start xxxs:block" onClick={toggleTheme}>
						<span className="text-xl">{theme === 'dark' ? '🌞' : '🌚'}</span>
					</button>
				</div>
			)}
		</div>
	);
};

export default HamburgerMenu;
