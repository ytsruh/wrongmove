import React, { useEffect, useState } from "react";

const useDeleteData = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (url) {
        setIsLoading(true);
        try {
          const user = await JSON.parse(sessionStorage.getItem("user"));
          const response = await fetch(url, {
            method: "DELETE",
            headers: { token: user.token },
          });
          if (!response.ok) {
            setServerError(true);
          }
          const data = await response.json();
          setApiData(data);
          setIsLoading(false);
        } catch (error) {
          setServerError(error);
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, apiData, serverError };
};

export default useDeleteData;
