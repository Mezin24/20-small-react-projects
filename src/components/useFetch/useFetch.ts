import { useCallback, useEffect, useState } from 'react';

interface UseFetchOptions {
  url: string;
  method?: string;
  headers?: Record<string, string>;
}

interface UseFetchReturn<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

export const useFetch = <T>({
  url,
  headers,
  method,
}: UseFetchOptions): UseFetchReturn<T> => {
  const [data, setData] = useState<null | T>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async <T>(): Promise<T> => {
    const response = await fetch(url, { headers, method });
    const apiData: T = await response.json();
    return apiData;
  }, [headers, method, url]);

  useEffect(() => {
    (async () => {
      try {
        setError(null);
        setIsLoading(true);
        const res = await fetchData<T>();
        setData(res);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        if (error instanceof Error) {
          setError(error.message);
        }
      }
    })();
  }, [fetchData, url]);

  return { data, error, isLoading };
};
