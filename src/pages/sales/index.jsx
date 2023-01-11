import useFetchPublicData from '../../hooks/useFetchPublicData'
import { formatPrice, thousandsFormatting, truncate, formatCreatedAt, capitaliseEachWord } from '../../utils';
import { useRouter } from 'next/router';

import ListingImages from '../../components/listings/ListingImages.jsx';

import bath from '../../assets/icons/listings/bath.png'
import bed from '../../assets/icons/listings/bed.png'

export default function AllSales () {
    
    const { isLoading, serverError, apiData } = useFetchPublicData("/api/public/sales");

    console.log(apiData)

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
                        />
                ))}
            </div>
        </div>
    )
}

function ListingCard (props) {

    const { serverError, apiData } = useFetchPublicData(`/api/public/agents/${props.agent}`);
    const router = useRouter()

    if(serverError) return <h1>Server Error</h1>

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
                            <img src={bed.src} style={{width: 20, height: 20}} alt="bedroom icon" />
                            <p>{props.bed}</p>
                        </div>
                        <div className='sales-all-bath'>
                            <img src={bath.src} style={{width: 20, height: 20}} alt="bathroom icon" />
                            <p>{props.bed}</p>
                        </div>
                    </div>
                    {props.desc ? <p style={{marginTop: '1rem'}}>{truncate(props.desc, 300)}</p> : <></>}
                    </div>
                    <div>
                        <h4 style={{paddingBottom: '0.5rem'}}>Added on {formatCreatedAt(props.createdAt)} by {apiData?.agent.name}</h4>
                        <div className='sales-all-agent'>
                            {apiData?.agent.image 
                                ? 
                                <img style={{width: 100}} src={process.env.NEXT_PUBLIC_IMAGES_ENDPOINT + apiData?.agent.image} alt="agent image" />
                                :
                                <></>
                            }
                            <div className='sales-all-agent-contact'>
                                <p>{apiData?.agent.telephoneNumber}</p>
                                <p>{apiData?.agent.description ? apiData?.agent.description : ''}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}