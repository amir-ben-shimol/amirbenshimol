import { useRouter } from 'next/navigation';
import { routes } from '@/routes/index';

const NotFoundLayout = () => {
	const router = useRouter();

	router.replace(routes.home.path);
};

export default NotFoundLayout;
