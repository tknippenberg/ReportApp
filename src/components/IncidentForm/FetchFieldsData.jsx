import { useState, useEffect } from "react";

function useDataFetcher(url, key, mapper) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        return response.json();
      })
      .then((responseData) => {
        const transformedData = mapper(responseData[key]);
        setData(transformedData);
      })
      .catch((error) => {
        setError("Failed to retrieve data. Please try again later.");
        console.error("Error fetching data:", error);
      });
  }, []);

  return { data, error };
}

export default useDataFetcher;
