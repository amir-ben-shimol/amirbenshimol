declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly NEXT_PUBLIC_NODE_ENV: 'development' | 'production';
		}
	}
}

export {};
