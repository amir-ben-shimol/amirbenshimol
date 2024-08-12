'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/utils/class-name';
import type { NavElement as NavElementType } from '../../../lib/types/ui/navigation';
import { routes } from '../../../lib/routes/routes';
import { UISvg } from '../../ui/UISvg';

type Props = {
	readonly className?: string;
	readonly labelClassName?: string;
	readonly textOnly?: boolean;
} & NavElementType;

const NavElement = (props: Props) => {
	const pathname = usePathname();
	const isActive = pathname.includes(props.path);

	if (props.path === routes.home.path) {
		return (
			<Link className={props.className} href={props.path}>
				<span className="text-2xl font-bold text-slate-700 dark:text-slate-200 sm:text-3xl">
					{pathname === routes.home.path ? (
						'🧀'
					) : (
						<>
							<span className="block xs:hidden">Amir</span>
							<span className="hidden xs:inline">Amir Ben Shimol</span>
						</>
					)}
				</span>
			</Link>
		);
	}

	return (
		<Link
			href={props.path}
			className={cn(
				`z-20 border-b-2 ${isActive && !props.icon ? 'border-b-green-500' : 'border-b-transparent'} ${props.icon ? 'hover:fill-white' : ''}`,
				props.className,
			)}
		>
			{props.icon && !props.textOnly ? (
				<div className="rounded-lg p-3 hover:bg-slate-400 hover:text-white hover:dark:bg-slate-700">
					<UISvg className="hover h-6 w-6" name={props.icon} />
				</div>
			) : (
				<span
					className={cn(
						'hidden text-lg text-slate-700 hover:text-slate-800 dark:text-slate-300 hover:dark:text-slate-100 xxs:block sm:text-xl',
						props.labelClassName,
					)}
				>
					{props.label}
				</span>
			)}
		</Link>
	);
};

export default React.memo(NavElement);
