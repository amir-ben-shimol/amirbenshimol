'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Props = {
	readonly children: React.ReactNode;
};

const PageTransitionWrapper = (props: Props) => {
	return (
		<motion.div
			className="h-full w-full"
			initial={{ y: 20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ ease: 'easeInOut', duration: 0.75 }}
		>
			{props.children}
		</motion.div>
	);
};

export default React.memo(PageTransitionWrapper);
