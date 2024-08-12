import type icons from '../../../assets/icons';
import type { RoutesPath } from './route';

export type NavElement = {
	readonly label: string;
	readonly path: RoutesPath;
	readonly icon?: keyof typeof icons;
};
