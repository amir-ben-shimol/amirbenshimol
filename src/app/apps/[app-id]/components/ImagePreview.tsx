'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
	readonly webImage: string;
	readonly mobileImage: string;
	readonly alt: string;
};

const ImagePreview = (props: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Image src={props.webImage} alt={props.alt} width={915} height={224} onClick={() => setIsOpen(true)} />
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
								className="flex h-fit max-h-[80%] w-full max-w-[715px] items-center justify-center overflow-hidden rounded-xl p-2"
								onClick={(e) => e.stopPropagation()}
							>
								<Image className="w-full rounded-xl" src={props.mobileImage} alt={props.alt} width={915} height={324} />
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			)}
		</>
	);
};

export default ImagePreview;
