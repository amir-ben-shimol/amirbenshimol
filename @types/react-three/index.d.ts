import type ThreeGlobe from 'three-globe';
import type { Object3DNode } from '@react-three/fiber';

declare module '@react-three/fiber' {
	interface ThreeElements {
		threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
	}
}

export {};
