import React, { useEffect, useState } from "react";

const useUpdateData = (url, submit, data) => {
  const [isSubmitting, setIsSubmitting] = useState(submit);
  const [updatedData, setUpdatedData] = useState(null);
  const [updateError, setUpdateError] = useState(null);

  useEffect(() => {
    const updateData = async () => {
      setIsSubmitting(true);
      const formData = await JSON.stringify(data);
      try {
        const user = await JSON.parse(sessionStorage.getItem("user"));
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            token: user.token,
            "Content-Type": "application/json",
          },
          body: formData,
        });
        if (!response.ok) {
          setUpdateError(true);
        }
        const data = await response.json();
        setUpdatedData(data);
        setIsSubmitting(false);
      } catch (error) {
        setUpdateError(error);
        setIsSubmitting(false);
      }
    };

    if (submit) {
      updateData();
    }
  }, [url, submit, data]);

  return { isSubmitting, updatedData, updateError };
};

export default useUpdateData;
