import icons from '../../../assets/icons';
import { RoutesPath } from './route';

export type NavElement = {
	readonly label: string;
	readonly path: RoutesPath;
	readonly icon?: keyof typeof icons;
};
