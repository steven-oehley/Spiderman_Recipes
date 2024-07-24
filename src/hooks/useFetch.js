import { useState, useEffect, useCallback } from "react";

export function useFetch(url, method = "GET") {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null);

  const postData = useCallback((newRecipe) => {
    setOptions({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    });
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async (fetchOptions) => {
      try {
        setIsLoading(true);
        const response = await fetch(url, {
          ...fetchOptions,
          signal: signal,
        });
        if (!response.ok) {
          const message = `An error has occurred: ${response.status}`;
          throw new Error(message);
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (method === "GET") {
      fetchData({});
    }

    if (method === "POST" && options) {
      fetchData(options);
    }

    return () => {
      controller.abort();
    };
  }, [url, method, options]);

  return { data, isLoading, error, postData };
}
