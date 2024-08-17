'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import type { ImageType } from '@/types/ui/app';
import { cn } from '@/utils/class-name';

type Props = {
	readonly viewType: 'web' | 'mobile';
	readonly webImage: ImageType;
	readonly mobileImage?: ImageType;
};

const ImagePreview = (props: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Image
				className={cn('cursor-pointer', props.viewType === 'mobile' && 'rounded-[48px]')}
				src={props.webImage.source}
				alt={props.webImage.alt}
				width={props.webImage.width}
				height={props.webImage.height}
				onClick={() => setIsOpen(true)}
			/>
			{isOpen && (
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 z-50 grid cursor-pointer place-items-center overflow-hidden overflow-y-scroll bg-slate-900/20 backdrop-blur"
							onClick={() => setIsOpen(false)}
						>
							<motion.div
								initial={{ scale: 0, rotate: '12.5deg' }}
								animate={{ scale: 1, rotate: '0deg' }}
								exit={{ scale: 0, rotate: '0deg' }}
								className={cn(
									'flex items-center justify-center overflow-hidden',
									props.viewType === 'mobile' ? 'rounded-[48px]' : 'h-fit max-h-[80%] w-full max-w-[715px] rounded-xl p-2',
								)}
								onClick={(e) => e.stopPropagation()}
							>
								<Image
									className="w-full rounded-xl"
									src={props.mobileImage?.source ?? props.webImage.source}
									alt={props.mobileImage?.alt ?? props.webImage.alt}
									width={props.mobileImage?.width ?? props.webImage.width}
									height={props.mobileImage?.height ?? props.webImage.height}
								/>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			)}
		</>
	);
};

export default ImagePreview;
