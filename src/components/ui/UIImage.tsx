'use client';

import React from 'react';
import Image, { type ImageProps } from 'next/image';
import { cn } from '@/utils/class-name';

export const UIImage: React.FC<ImageProps> = (props) => {
	return <Image {...props} quality={100} priority className={cn('transition-all duration-500 ease-in-out', props.className)} />;
};
