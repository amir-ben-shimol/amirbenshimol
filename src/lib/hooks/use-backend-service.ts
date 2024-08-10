import { useCallback } from 'react';

import type { THttpMethod, ResponseData, FetchOptions } from '@/types/api/http';

const useBackendService = () => {
	const fetcher = useCallback(async <R = unknown, D = unknown>(path: string, method: THttpMethod, options?: FetchOptions<D>): Promise<ResponseData<R>> => {
		const { data, ...fetchOptions } = options ?? {};

		const headers = {
			'Content-Type': 'application/json',
			...fetchOptions.headers,
		};

		const response = await fetch(`api${path}`, {
			method,
			headers,
			body: data ? JSON.stringify(data) : undefined,
			...fetchOptions,
		});

		if (!response.ok) {
			const errorResponse = await response.json().catch(() => ({
				message: `Failed to fetch: ${response.status} ${response.statusText}`,
				status: response.status,
			}));

			return errorResponse as ResponseData<R>;
		}

		return response.json().catch(() => ({
			ok: false,
			status: response.status,
		}));
	}, []);

	const BackendService = {
		get: useCallback(<R = unknown>(path: string, options?: FetchOptions<null>): Promise<ResponseData<R>> => {
			return fetcher<R, null>(path, 'GET', options);
		}, []),

		post: useCallback(<R = unknown, D = unknown>(path: string, options?: FetchOptions<D>): Promise<ResponseData<R>> => {
			return fetcher<R, D>(path, 'POST', options);
		}, []),

		patch: useCallback(<R = unknown, D = unknown>(path: string, options?: FetchOptions<D>): Promise<ResponseData<R>> => {
			return fetcher<R, D>(path, 'PATCH', options);
		}, []),

		delete: useCallback(<R = unknown>(path: string, options?: FetchOptions<null>): Promise<ResponseData<R>> => {
			return fetcher<R, null>(path, 'DELETE', options);
		}, []),
	};

	return BackendService;
};

export default useBackendService;
