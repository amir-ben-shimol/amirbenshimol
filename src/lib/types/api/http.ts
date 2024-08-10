import type { NextResponse } from 'next/server';
import type { SWRConfiguration } from 'swr';

export type THttpMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

export type ResponseData<T> = NextResponse & {
	readonly data: T;
};

export type FetchOptions<D> = RequestInit & {
	readonly data?: D;
};

export type SwrOptionsConfiguration<D> = {
	data?: D;
} & SWRConfiguration;
