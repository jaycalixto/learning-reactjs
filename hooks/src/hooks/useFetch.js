import { useState, useEffect } from 'react';

export const useFetch = (url, verb = 'get') => {
  const [response, setResponse] = useState({
    data: null,
    loading: true,
  });

  useEffect(() => {
    fetch(url, { method: verb })
      .then(response => response.json())
      .then(json => setResponse({
        data: json,
        loading: false,
      }));
    
  }, [url, verb]);

  return response;
};

