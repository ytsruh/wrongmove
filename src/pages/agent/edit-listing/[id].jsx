import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Alert from '../../../components/Alert';
import Form from '../../../components/Form'
import Protected from '../../../components/Protected'
import InlineLink from '../../../components/InlineLink'
import ImageForm from '../../../components/ImageForm'
import DeleteImages from '../../../components/DeleteImages';

import useFetchData from '../../../hooks/useFetchData'

function EditListing() {

  const router = useRouter()
  const { id } = router.query

  const [loading, setLoading] = useState(true)
  const [singleListing, setSingleListing] = useState(null)
  const [fetchingUser, setFetchingUser] = useState(true)
  const [user, setUser] = useState(null)
  const [errMsg, setErrMsg] = useState(false)

  useEffect(() => {
    const fetchUser = () => {
      setUser(JSON.parse(sessionStorage.getItem("user")));
      setFetchingUser(false);
    };
    fetchUser();
  }, []);

  if(!fetchingUser && !user) {
    router.push('/login/agent')
}

  const { isLoading, serverError, apiData } = useFetchData(`/api/sales/${id}`)

  useEffect(() => {
    if (!router.isReady) return;
    if (!apiData) return;
    if (apiData.data.length !== 1) {
        return
    } else {
      setSingleListing(apiData)
      setLoading(false)
    }
  }, [id, apiData, router.isReady])
  
  if (fetchingUser) return <h1>Loading...</h1>
  if (isLoading && loading) return <h1>Loading...</h1>;
  if (serverError) return <h1>Server Error</h1>
  
  if (!isLoading && singleListing) {

    const { address, price, propertyType, bedrooms, bathrooms, keyFeatures, description } = singleListing.data[0]

    const editFormArr = [
        {
          label: 'Property Address',
          name: 'address',
          type: 'text',
          placeholder: address
        },
        {
          label: 'Price',
          name: 'price',
          type: 'number',
          placeholder: price,
        },
        {
          // change this to show radio boxes
          label: 'Property Type',
          name: 'propertyType',
          type: 'text',
          placeholder: propertyType
        },
        {
          // should take up 50% width on desktop
          label: 'Bedrooms',
          name: 'bedrooms',
          type: 'number',
          placeholder: bedrooms
        },
        {
          // should take up 50% width on desktop
          label: 'Bathrooms',
          name: 'bathrooms',
          type: 'number',
          placeholder: bathrooms
        },
        {
          label: 'Key Features',
          name: 'keyFeatures',
          type: 'text',
          placeholder: keyFeatures
        },
        {
            label: 'Description',
            name: 'description',
            type: 'text',
            placeholder: description
        }
    ]

    const onSubmit = async (form, callback) => {
        callback()

        if(form.address === "") delete form.address
        if(form.bathrooms === "") delete form.bathrooms
        if(form.bedrooms === "") delete form.bedrooms
        if(form.description === "") delete form.description
        if(form.keyFeatures === "") delete form.keyFeatures
        if(form.price === "") delete form.price
        if(form.propertyType === "") delete form.propertyType
        if(form.price) form.price = parseInt(form.price)
        if(form.bathrooms) form.bathrooms = parseInt(form.bathrooms)
        if(form.bedrooms) form.bedrooms = parseInt(form.bedrooms)

        try {
          const user = JSON.parse(sessionStorage.getItem('user'))
          await fetch(`/api/sales/${id}`, {
          method: "PUT",
          body: JSON.stringify(form),
          headers: {
              "Content-type": "application/json; charset=UTF-8",
              token: `${user.token}`,
          }
          })
          router.push('/agent/sales')
      } catch (error) {
          console.log(error);
          setErrMsg(error)
      }
    }

    return (
        <Protected>
            <div className="dashboard-container center w-100">
                <h1>Edit Property Listing for {address}</h1>
                <div className="agent-summary text-center">
                    <InlineLink to="/agent/dashboard" text="Back to Dashboard" />
                </div>
            </div>
            <div className='w-100 two-column-grid'>
                <Form 
                    formArr={editFormArr}
                    onSubmit={onSubmit}
                    title='Edit Property Listing'
                    submitBtn='Submit Changes'
                    redirect={null}
                />
                <div className='w-100'>
                  <ImageForm
                    formTitle="Add A Property Image"
                    buttonText="Upload Image"
                    // update redirect to sales listing when page is finished
                    redirectUrl="/agent/dashboard"
                    apiEndpoint={`/api/sales/${id}/image`}
                  />
                    {apiData?.data[0]?.images.length !== 0 ? 
                      <DeleteImages 
                        images={apiData.data[0]?.images}
                      />
                    : 
                      <></>
                    }
                </div>
            {errMsg ? <Alert msg={errMsg} type='error'></Alert> : <></>}
            </div>
        </Protected>
    )
  }
  return <h1>Listing does not exist</h1>

}

export default EditListing