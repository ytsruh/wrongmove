import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import useFetchData from '../../../hooks/useFetchData'

function editListing() {

  const router = useRouter()
  const { id } = router.query

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false);

  const { isLoading, serverError, apiData } = useFetchData(`/api/sales/${id}`);

  useEffect(() => {
    if (!router.isReady) return;
    console.log(apiData);
  }, [id, apiData])
  
  if (isLoading) return <h1>Loading...</h1>;
  if (serverError) return <h1>No Data Found</h1>
  return (
    <div>edit listing</div>
  )
}

export default editListing

