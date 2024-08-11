'use client';

import { useMotionValue, motion, useMotionTemplate } from 'framer-motion';
import React, { MouseEvent as ReactMouseEvent, useState } from 'react';
import { cn } from '@/utils/class-name';
import { UICanvasRevealEffect } from './UICanvasRevealEffect';

export const UICardSpotlight = ({
	children,
	radius = 350,
	color = '#262626',
	className,
	...props
}: {
	radius?: number;
	color?: string;
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	function handleMouseMove({ currentTarget, clientX, clientY }: ReactMouseEvent<HTMLDivElement>) {
		let { left, top } = currentTarget.getBoundingClientRect();

		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	const [isHovering, setIsHovering] = useState(false);
	const handleMouseEnter = () => setIsHovering(true);
	const handleMouseLeave = () => setIsHovering(false);
	return (
		<div
			className={cn('group/spotlight relative rounded-md border border-slate-300 bg-slate-100 p-6 dark:border-slate-800 dark:bg-black', className)}
			onMouseMove={handleMouseMove}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			{...props}
		>
			<motion.div
				className="pointer-events-none absolute -inset-px z-0 rounded-md bg-white opacity-0 transition duration-300 group-hover/spotlight:opacity-100 dark:bg-[#262626]"
				style={{
					maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
				}}
			>
				{isHovering && (
					<UICanvasRevealEffect
						animationSpeed={5}
						containerClassName="bg-transparent absolute inset-0 pointer-events-none"
						colors={[
							[59, 130, 246],
							[139, 92, 246],
						]}
						dotSize={3}
					/>
				)}
			</motion.div>
			{children}
		</div>
	);
};
