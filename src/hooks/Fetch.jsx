import React, { useEffect, useState } from "react";

const useFetch = (param) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async function () {
    try {
      setLoading(true);
      const response = await fetch(`https://api.coingecko.com/api/v3/${param}`);
      const data = await response.json();
      setResponse(data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(param);
  }, []);

  return {
    response,
    loading,
    error,
  };
};

export default useFetch;
