import { redirect } from 'next/navigation';
import { routes } from '@/routes/index';

const NotFoundLayout = () => {
	redirect(routes.home.path);
};

export default NotFoundLayout;
