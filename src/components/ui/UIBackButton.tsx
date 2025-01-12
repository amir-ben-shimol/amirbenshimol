'use client';

import { useRouter } from 'next/navigation';
import { UISvg } from './UISvg';

export const UIBackButton = () => {
	const router = useRouter();

	return (
		<button type="button" className="absolute -left-1 -top-16 z-10 flex" onClick={() => router.back()}>
			<UISvg name="arrow" className="h-8 w-8" />
		</button>
	);
};
