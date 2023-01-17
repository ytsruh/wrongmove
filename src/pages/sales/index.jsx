import useFetchPublicData from '../../hooks/useFetchPublicData'
import { formatPrice, thousandsFormatting, truncate, formatCreatedAt, capitaliseEachWord } from '../../utils';
import { useRouter } from 'next/router';

import bath from '../../assets/icons/listings/bath.png'
import bed from '../../assets/icons/listings/bed.png'

export default function AllSales () {
    
    const { isLoading, serverError, apiData } = useFetchPublicData("/api/public/sales");

    if(isLoading) return <h1>Loading...</h1>
    if(serverError) return <h1>Server Error</h1>

    return (
        <div className="flex center w-100">
            <h1 className='py-3'>All For Sale Listings</h1>
            {/* add filters here once backend code is finished */}
            

            <div className="w-100 flex center p-1 br-05" style={{backgroundColor: '#e9e9eb'}}>
                {apiData?.data.map((listing, index) => (
                        <ListingCard
                            data='eggggggg'
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