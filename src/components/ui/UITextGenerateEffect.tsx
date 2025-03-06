'use client';
import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '@/utils/class-name';

type Props = {
	words: string;
	className?: string;
	filter?: boolean;
	duration?: number;
};

export const UITextGenerateEffect = ({ words, className, filter = true, duration = 0.5 }: Props) => {
	const [scope, animate] = useAnimate();
	const wordsArray = words.split(' ');

	useEffect(() => {
		animate(
			'span',
			{
				opacity: 1,
				filter: filter ? 'blur(0px)' : 'none',
			},
			{
				duration: duration ? duration : 1,
				delay: stagger(0.4),
			},
		);
	}, [scope.current]);

	const renderWords = () => {
		return (
			<motion.div ref={scope}>
				{wordsArray.map((word, idx) => {
					return (
						<motion.span
							key={word + idx}
							className="text-center text-xl font-light text-gray-600 dark:text-gray-400 sm:text-3xl"
							style={{
								filter: filter ? 'blur(10px)' : 'none',
							}}
						>
							{`${word} `}
						</motion.span>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div className={cn(className)}>
			<div className="text-center text-xl leading-snug tracking-wide text-gray-400 sm:text-3xl">{renderWords()}</div>
		</div>
	);
};
