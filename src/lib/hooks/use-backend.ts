import { useCallback } from 'react';
import useSWR from 'swr';

import type { SwrOptionsConfiguration } from '@/types/api/http';

import useBackendService from './use-backend-service';

const useBackend = <R = unknown, D = unknown>(path: string, options?: SwrOptionsConfiguration<D>) => {
	const BackendService = useBackendService();

	const fetcher = useCallback(() => {
		return BackendService.get<R>(path).then((response) => {
			if (response.data === undefined) {
				throw new Error('No data returned from API');
			}

			return response.data as R;
		});
	}, [path]);

	const { data, error, isValidating, mutate } = useSWR<R, D>(path, fetcher, options);

	return { data, error, isLoading: isValidating, mutate };
};

export default useBackend;
