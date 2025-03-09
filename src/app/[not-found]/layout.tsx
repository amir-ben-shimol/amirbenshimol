'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { routes } from '@/routes/index';

const NotFoundLayout = () => {
	const router = useRouter();

	useEffect(() => {
		router.replace(routes.home.path);
	}, [router]);

	return null;
};

export default NotFoundLayout;
