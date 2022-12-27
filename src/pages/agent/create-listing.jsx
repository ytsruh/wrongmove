import { useState, useEffect } from "react";

import Protected from "../../components/Protected";
import DashboardCard from "../../components/cards/DashboardCard";
import Header from "../../components/Header";
import Form from '../../components/Form'
import sale from '../../assets/sale.jpeg'
import rent from '../../assets/rent.webp'

function CreateListing({ form }) {

    const onSubmitHandler = async (form, callback) => {
        callback()

        try {
            fetch('/api/sales', {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiY2w4OG9vczc4MDAwNThhczhlbHkxbWUzMCIsImVtYWlsIjoiamFtZXNib25kQGdtYWlsLmNvbSIsInR5cGUiOiJhZ2VudCJ9LCJleHAiOjE2NzEwMTM3NDAsImlhdCI6MTY3MDkyNzM0MH0.cdmmFlXYMzTJmp6EZYyRmnR3D1SEOxDgw6hEFH67NWE'
            }
            })
            .then(response => response.json()) 
            .then(json => console.log(json))
            .catch(err => console.log(err))

        } catch (error) {
            console.log(error);
        }
  }

    const [propertyType, setPropertyType] = useState(null)

    useEffect(() => {
        
    }, [propertyType])

        return (
            <Protected>
                <div className="flex f-ver gap-3">
                    <Header
                        title='Create a New Listing'
                        desc='Add a new sales or rental property to Wrongmove.'
                    />
                    <div className="create-listing">
                        <div className="two-column-grid">
                            <DashboardCard
                                title='List a Property for Sale'
                                image={sale.src}
                                to=''
                                onClick={() => setPropertyType('sale')}
                            />
                            <DashboardCard
                                title='List a Property to Rent'
                                text=''
                                image={rent.src}
                                to=''
                                onClick={() => setPropertyType('rent')}
                            />
                        </div>

                        {(() => {
                            if (propertyType === null){
                                return <></> 
                            } 
                            if(propertyType === 'sale'){
                                return (
                                    <div className="sale-form">
                                        <Form 
                                            formArr={saleFormArr}
                                            title='Submit a Property for Sale'
                                            submitBtn='List Property'
                                            redirect={null}
                                            onSubmit={onSubmitHandler}
                                        />
                                    </div> 
                                )
                            } if (propertyType === 'rent') {
                                return (
                                    <div className="rental-form">
                                        <Form 
                                            // formArr={rentalFormArr}
                                            title='Rental Option Coming Soon'
                                            formArr={[]}
                                            submitBtn='Coming soon'
                                        />
                                    </div>
                                )
                            }
                        })()}
                    </div>
                </div>
            </Protected>
        )
    }

export default CreateListing

const saleFormArr = [
    {
      label: 'Property Address*',
      name: 'address',
      type: 'text',
      placeholder: '8 Park Lane London NW82 9GU',
      required: true
    },
    {
      label: 'Price*',
      name: 'price',
      type: 'number',
      placeholder: '£890,000',
      required: true
    },
    {
      // change this to show radio boxes
      label: 'Property Type',
      name: 'propertyType',
      type: 'text',
      placeholder: 'Terrace House',
    },
    {
      // should take up 50% width on desktop
      label: 'Bedrooms',
      name: 'bedrooms',
      type: 'number',
      placeholder: 3
    },
    {
      // should take up 50% width on desktop
      label: 'Bathrooms',
      name: 'bathrooms',
      type: 'number',
      placeholder: 3
    },
    {
      label: 'Key Features',
      name: 'keyFeatures',
      type: 'text',
      placeholder: 'Lift, Gym, 2100sq ft, Concierge'
    },
    {
        label: 'Description',
        name: 'description',
        type: 'text',
        placeholder: `This impressive three-bedroom 'Vantage Collection' apartment offering 2,133 sq ft living space spans across half the 19th floor which allows a private entrance directly from the lift.`
    }
]

const rentalFormArr = [
    {
      label: 'Property Address*',
      name: 'address',
      type: 'text',
      placeholder: '8 Park Lane London NW82 9GU',
      required: true
    },
    {
      label: 'Monthly Rental Price*',
      name: 'price',
      type: 'number',
      placeholder: '£2000',
      required: true
    },
    {
      // change this to show radio boxes
      label: 'Property Type',
      name: 'propertyType',
      type: 'text',
      placeholder: 'Terrace House',
    },
    {
      // should take up 50% width on desktop
      label: 'Bedrooms',
      name: 'bedrooms',
      type: 'number',
      placeholder: 3
    },
    {
      // should take up 50% width on desktop
      label: 'Bathrooms',
      name: 'bathrooms',
      type: 'number',
      placeholder: 3
    },
    {
      label: 'Key Features',
      name: 'keyFeatures',
      type: 'text',
      placeholder: 'Lift, Gym, 2100sq ft, Concierge'
    },
    {
        label: 'Description',
        name: 'description',
        type: 'text',
        placeholder: `This impressive three-bedroom 'Vantage Collection' apartment offering 2,133 sq ft living space spans across half the 19th floor which allows a private entrance directly from the lift.`
    }
]