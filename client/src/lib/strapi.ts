import { useEffect, useState } from "react";

type UseFetchResult<T> = {
    data: T | null;
    error: Error | null;
    fetching: boolean;
};

const useFetch = <T>(url: string): UseFetchResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setFetching(true);

            try {
                const res = await fetch(url);
                const json = await res.json?.();

                setData(json ?? null);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error);
                } else {
                    setError(new Error("An unknown error occurred."));
                }
            } finally {
                setFetching(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, error, fetching };
};

export default useFetch;