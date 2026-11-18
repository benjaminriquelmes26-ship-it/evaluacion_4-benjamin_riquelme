import { useState, useEffect } from 'react';
import { mensajeErrorHttp } from '../services/apiService';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetchApi<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async (): Promise<void> => {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      try {
        const response = await fetch(url, { signal: abortController.signal });

        if (!response.ok) {
          throw new Error(mensajeErrorHttp(response.status));
        }

        const result = (await response.json()) as T;
        setState({ data: result, loading: false, error: null });
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') return;

        const mensaje =
          err instanceof TypeError
            ? 'No hay conexión con el servidor. Revisa tu internet.'
            : err instanceof Error
              ? err.message
              : 'Error desconocido al consultar la API.';

        setState({ data: null, loading: false, error: mensaje });
      }
    };

    void fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return state;
}