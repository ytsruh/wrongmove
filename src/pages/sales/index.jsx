import useFetchPublicData from '../../hooks/useFetchPublicData'
import { formatPrice, thousandsFormatting, truncate, formatCreatedAt, capitaliseEachWord, parsePropertyType } from '../../utils';
import { useRouter } from 'next/router';
import Head from 'next/head';

import bath from '../../assets/icons/listings/bath.png'
import bed from '../../assets/icons/listings/bed.png'

import Dropdown from '../../components/Dropdown';
import { useState } from 'react';

export default function AllSales () {

    const [minBedrooms, setMinBedrooms] = useState(null)
    const [propertyType, setPropertyType] = useState(null)
    const [minPrice, setMinPrice] = useState(null)
    const [maxPrice, setMaxPrice] = useState(null)
    const { isLoading, serverError, apiData } = useFetchPublicData(`/api/public/sales?${minBedrooms ? `&bedrooms=${minBedrooms}` : ''}${propertyType ? `&propertytype=${propertyType}` : ''}${minPrice ? `&minprice=${minPrice}` : ''}${maxPrice ? `&maxprice=${maxPrice}` : ''}`);
    
    if(isLoading) return <h1>Loading...</h1>
    if(serverError) return <h1>Server Error</h1>

    return (
        <>
            <Head>
                <title>Sales | Wrongmove</title>
                <meta name="description" content="Wrongmove sales listings. The Righmove clone." />
            </Head>
        <div className="flex center w-100">
            <h1 className='py-1'>Sale Listings</h1>
            <div className='query p-1 four-column-grid gap-1 w-100'>
                <div className="query-bedrooms">
                    <Dropdown 
                        title='Min Bedrooms'
                        onClick={(value) => setMinBedrooms(value)}
                        items={[1, 2, 3, 4, 5, 6, 7, '8+']}
                    />
                </div>
                <div className="query-minPrice">
                    <Dropdown 
                        title='Min Price'
                        onClick={(value) => setMinPrice(value)}
                        items={[50000, 75000, 100000, 125000, 150000, 200000, 300000, 500000, 750000, '900000+']}
                    />
                </div>
                <div className="query-maxPrice">
                    <Dropdown 
                        title='Max Price'
                        onClick={(value) => setMaxPrice(value)}
                        items={[50000, 75000, 100000, 125000, 150000, 200000, 300000, 500000, 750000, '900000+']}
                    />
                </div>
                <div className="property-type">
                    <Dropdown 
                        title='Property Type'
                        onClick={(value) => setPropertyType(value)}
                        items={['Detached', 'Semi-Detached', 'Bungalow', 'Terraced', 'Flat', 'Land']}
                    />
                </div>
            </div>
            <div className='w-100 flex center p-1'>
                <button
                    className="btn btn-clear" onClick={() => {
                        setMinBedrooms(null)
                        setMinPrice(null)
                        setMaxPrice(null)
                        setPropertyType(null)
                }}>Clear Filters</button>
            </div>
            <div className="w-100 flex center p-1 br-05 mt-1" style={{backgroundColor: '#e9e9eb'}}>
                {apiData?.data.map((listing, index) => (
                        <ListingCard
                            thumbnail={listing.images[0]?.file ? process.env.NEXT_PUBLIC_IMAGES_ENDPOINT + listing.images[0]?.file : 'https://via.placeholder.com/600x200.png?text=Placeholder+Image'}
                            key={index}
                            price={listing.price}
                            address={listing.address}
                            propertyType={listing.propertyType}
                            bed={listing.bedrooms}
                            bath={listing.bathrooms}
                            desc={listing.description}
                            keyFeatures={listing.keyFeatures}
                            createdAt={listing.createdAt}
                            agent={listing.agentId}
                            listingID={listing.id}
                            isLoading={isLoading}
                            serverError={serverError}
                            apiData={listing}
                        />
                ))}
            </div>
        </div>
        </>
    )
}

function ListingCard (props) {

    const { apiData } = props
    const router = useRouter()

    return (
        <div onClick={() => router.push(`/sales/${props.listingID}`)} className={`w-100 br-05 mx-05 ${props.className}`} style={{backgroundColor: '#fff'}}>
            <div className='listing-card two-column-grid four-six' style={{gap: 0}}>
                    <div
                        className='sales-all-image'
                        style={{
                            backgroundImage: `url(${props.thumbnail})`, 

                        }}>
                        <p className='sales-all-price'>{formatPrice(thousandsFormatting(props.price))}</p>
                    </div>
                <div className='sales-all-listing-data'>
                    <div>
                        <h3>{capitaliseEachWord(props.address)}</h3>
                        <div className='sales-all-bathbedtype'>
                        <p>{capitaliseEachWord(props.propertyType)}</p>
                        <div className='sales-all-bed'>
                            <div className='bg-img' style={{width: 20, height: 20, backgroundImage: `url(${bed.src})`}} alt="bedroom icon" />
                            <p>{props.bed}</p>
                        </div>
                        <div className='sales-all-bath'>
                            <div className='bg-img' style={{width: 20, height: 20, backgroundImage: `url(${bath.src})`}} alt="bathroom icon" />
                            <p>{props.bed}</p>
                        </div>
                    </div>
                    {props.desc ? <p style={{marginTop: '1rem'}}>{truncate(props.desc, 300)}</p> : <></>}
                    </div>
                    <div>
                        <h4 style={{paddingBottom: '0.5rem'}}>Added on {formatCreatedAt(props.createdAt)} by {apiData?.agent?.name}</h4>
                        <div className='sales-all-agent'>
                            {apiData?.agent?.image 
                                ? 
                                <div className='bg-img' style={{width: 100, backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGES_ENDPOINT + apiData?.agent?.image})`}} alt="agent image" />
                                :
                                <></>
                            }
                            <div className='sales-all-agent-contact'>
                                <p>{apiData?.agent?.telephoneNumber}</p>
                                <p>{apiData?.agent?.description ? truncate(apiData?.agent?.description, 100) : ''}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}