import { redirect } from 'next/navigation';
import { routes } from '../../lib/routes/routes';

const NotFoundLayout = () => {
	redirect(routes.home.path);
};

export default NotFoundLayout;
