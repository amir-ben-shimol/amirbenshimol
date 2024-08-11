'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/class-name';

type Props = {
	readonly className?: string;
};

export const UIBackgroundBoxes = React.memo((props: Props) => {
	const rows = new Array(100).fill(1);
	const cols = new Array(50).fill(1);
	const colors = ['--sky-300', '--pink-300', '--green-300', '--yellow-300', '--red-300', '--purple-300', '--blue-300', '--indigo-300', '--violet-300'];
	const getRandomColor = () => {
		return colors[Math.floor(Math.random() * colors.length)];
	};

	return (
		<div
			className={cn('absolute -top-1/4 left-1/4 z-0 hidden h-full w-full -translate-x-1/2 -translate-y-1/2 p-4 sm:flex', props.className)}
			style={{
				transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
			}}
		>
			{rows.map((_, i) => (
				<motion.div key={`row` + i} className="relative h-8 w-16 border-l border-slate-400 dark:border-slate-700">
					{cols.map((_, j) => (
						<motion.div
							whileHover={{
								backgroundColor: `var(${getRandomColor()})`,
								transition: { duration: 0 },
							}}
							animate={{
								transition: { duration: 2 },
							}}
							key={`col` + j}
							className="relative h-8 w-16 border-r border-t border-slate-400 dark:border-slate-700"
						>
							{j % 2 === 0 && i % 2 === 0 ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="pointer-events-none absolute -left-[22px] -top-[14px] h-6 w-10 stroke-[1px] text-slate-300 dark:text-slate-700"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
								</svg>
							) : null}
						</motion.div>
					))}
				</motion.div>
			))}
		</div>
	);
});
