'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { NavElement as NavElementType } from '../../../lib/types/ui/navigation';
import { routes } from 'src/lib/routes/routes';
import UISvg from 'src/components/UI/UISvg';

const NavElement = (props: NavElementType) => {
	const pathname = usePathname();
	const isActive = pathname.includes(props.path);

	if (props.path === routes.home.path) {
		return (
			<Link href={props.path}>
				<span className="text-xl font-bold text-slate-700 dark:text-slate-300 sm:text-3xl">
					{pathname === routes.home.path ? (
						'🧀'
					) : (
						<>
							<span className="xs:hidden block">Amir</span>
							<span className="xs:inline hidden">Amir Ben Shimol</span>
						</>
					)}
				</span>
			</Link>
		);
	}

	return (
		<Link
			href={props.path}
			className={`border-b-2 ${isActive && !props.icon ? 'border-b-green-500' : 'border-b-transparent'} ${props.icon ? 'hover:fill-white' : ''}`}
		>
			{props.icon ? (
				<div className="rounded-lg p-3 hover:bg-slate-400 hover:text-white hover:dark:bg-slate-700">
					<UISvg className="hover h-6 w-6" name={props.icon} />
				</div>
			) : (
				<span className="xxs:block hidden text-lg text-slate-700 hover:text-slate-800 dark:text-slate-300 hover:dark:text-slate-100 sm:text-xl">
					{props.label}
				</span>
			)}
		</Link>
	);
};

export default React.memo(NavElement);
