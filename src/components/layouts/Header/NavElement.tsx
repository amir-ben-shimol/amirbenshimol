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
			<Link href={props.path} className={`px-4 py-2`}>
				<span className="text-3xl font-bold text-foreground">{pathname === routes.home.path ? '🧀' : 'Amir Ben Shimol'}</span>
			</Link>
		);
	}

	return (
		<Link
			href={props.path}
			className={`border-b-2 px-4 py-2 ${isActive && !props.icon ? 'border-b-green-500' : 'border-b-transparent'} ${
				props.icon ? 'hover:fill-white' : ''
			}`}
		>
			{props.icon ? (
				<div className="rounded-lg p-3 hover:bg-slate-400 hover:text-white hover:dark:bg-slate-700">
					<UISvg className="hover h-6 w-6" name={props.icon} />
				</div>
			) : (
				<span className="text-xl text-accent-foreground">{props.label}</span>
			)}
		</Link>
	);
};

export default React.memo(NavElement);
