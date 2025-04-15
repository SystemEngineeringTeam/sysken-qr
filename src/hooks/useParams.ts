import { useCallback } from "react";

export function useParams() {
  const params = new URLSearchParams(window.location.search);

  const setParam = useCallback((key: string, value: string | undefined) => {
    if (value === undefined) params.delete(key);
    else params.set(key, value);

    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`,
    );
  }, []);

  return [Object.fromEntries(params.entries()), { setParam }] as const;
}
