import type { NavElement } from '@/types/ui/navigation';
import { routes } from '@/routes/index';

export const headerNavigationElemets: NavElement[] = [
	{
		label: 'Home',
		path: routes.home.path,
	},
	{
		label: 'Apps',
		path: routes.apps.path,
	},
	{
		label: 'About',
		path: routes.about.path,
	},
	{
		label: 'Blog',
		path: routes.blog.path,
	},
	{
		label: 'Contact',
		path: routes.contact.path,
		icon: 'contact',
	},
];
