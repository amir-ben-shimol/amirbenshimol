import type { routes } from '../../routes';

type Routes = typeof routes;

export type Route = {
	readonly path: string;
	readonly title: string;
};

export type RoutesPath = {
	[K in keyof Routes]: Routes[K] extends Route ? Routes[K]['path'] : never;
}[keyof Routes];
