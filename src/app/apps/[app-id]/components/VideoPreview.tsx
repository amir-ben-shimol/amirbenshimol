'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/utils/class-name';
import { UISvg } from '@/ui/UISvg';

type Props = {
	readonly viewType: 'web' | 'mobile';
	readonly webVideo: {
		source: string;
		alt: string;
		width: number;
		height: number;
	};
	readonly mobileVideo?: {
		source: string;
		alt: string;
		width: number;
		height: number;
	};
};

const VideoPreview = (props: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className="relative inline-block cursor-pointer" onClick={() => setIsOpen(true)}>
				<video
					className={cn(props.viewType === 'mobile' ? 'rounded-[48px]' : 'rounded-md')}
					src={props.webVideo.source}
					width={props.webVideo.width}
					height={props.webVideo.height}
					preload="metadata"
				/>
				<div className="absolute inset-0 flex items-center justify-center">
					<UISvg name="play" className="h-20 w-20" />
				</div>
			</div>
			{isOpen && (
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-50 grid cursor-pointer place-items-center overflow-hidden bg-slate-900/90 backdrop-blur-sm"
						onClick={() => setIsOpen(false)}
					>
						<motion.div
							initial={{ scale: 0, rotate: '12.5deg' }}
							animate={{ scale: 1, rotate: '0deg' }}
							exit={{ scale: 0, rotate: '0deg' }}
							className={cn(
								'max-h-screen-lg h-[30vh] w-[90vw] max-w-screen-lg p-4 md:h-[80vh]',
								props.viewType === 'mobile' ? 'rounded-[48px]' : 'rounded-xl',
							)}
							onClick={(e) => e.stopPropagation()}
						>
							{/* Modal video with controls and autoPlay */}
							<video src={props.mobileVideo?.source ?? props.webVideo.source} controls autoPlay className="h-full w-full rounded-xl" />
						</motion.div>
					</motion.div>
				</AnimatePresence>
			)}
		</>
	);
};

export default VideoPreview;
