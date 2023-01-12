import { useRouter } from "next/router"
import useFetchPublicData from "../../hooks/useFetchPublicData"
import { thousandsFormatting } from "../../utils"

import house from '../../assets/icons/listings/house.png'
import bath from '../../assets/icons/listings/bath.png'
import bed from '../../assets/icons/listings/bed.png'
import ListingImages from "../../components/listings/ListingImages"

export default function SalesListing() {

    const router = useRouter()
    const { id } = router.query
    const { isLoading, serverError, apiData } = useFetchPublicData(`/api/public/sales/${id}`)
    
    console.log(apiData);
    if(isLoading) return <h1>Loading...</h1>
    if(serverError) return <h1>Server Error</h1>

    if (apiData?.data) {
    return (
        <>
            <div className="flex center w-100 gap-2">
                <div className="two-column-grid six-four w-100" style={{gap: '0.5rem'}}>
                    <div
                        style={{
                            backgroundImage: apiData?.data?.images[0]?.file ? `url(${process.env.NEXT_PUBLIC_IMAGES_ENDPOINT + apiData?.data?.images[0]?.file})` : 'https://via.placeholder.com/600x200.png?text=Placeholder+Image',
                            height: 500,
                            width: '100%',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            borderRadius: '0.5rem'
                        }}
                        ></div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem',
                            borderRadius: '0.5rem'
                        }}
                    >
                    <div
                        style={{
                            backgroundImage: `url(${apiData?.data?.images[1] ? process.env.NEXT_PUBLIC_IMAGES_ENDPOINT + apiData?.data?.images[1]?.file : 'https://via.placeholder.com/600x200.png?text=Placeholder+Image'}`,
                            height: '50%',
                            width: '100%',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            borderRadius: '0.5rem'
                        }}
                        ></div>
                    <div
                        style={{
                            backgroundImage: `url(${apiData?.data?.images[2] ? process.env.NEXT_PUBLIC_IMAGES_ENDPOINT + apiData?.data?.images[2]?.file : 'https://via.placeholder.com/600x200.png?text=Placeholder+Image'}`,                            
                            height: '50%',
                            width: '100%',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            borderRadius: '0.5rem'
                        }}
                    ></div>
                    </div>
                </div>
                <div className="w-100 two-column-grid" style={{
                    gap: '0.5rem',
                }}>
                    <div className="listing-left">
                        <h1 style={{fontSize: '1.6rem'}}>{apiData?.data?.address}</h1>
                        <div>
                            <p style={{fontSize: '1.2rem'}}>Offers Over</p>
                            <p className="effraBold" style={{fontSize: '1.5rem',}}>£{thousandsFormatting(apiData?.data?.price)}</p>
                        </div>
                        <hr style={{margin: '2rem 0'}}/>
                        <div className="three-column-grid">
                            <div className="property-type" style={{gap: '0.5rem', display: 'flex', flexDirection: 'column'}}>
                                <h4 className="effraReg" style={{fontSize: '1.2rem'}}>Property Type</h4>
                                <div className="auto-two-column-grid" style={{alignItems: 'center'}}>
                                    <img style={{width: 30, height: 30}} src={house.src} alt="property type icon" />
                                    <p className="effraReg" style={{fontSize: '1.25rem'}}>{apiData?.data?.propertyType}</p>
                                </div>
                            </div>
                            <div className="bedrooms" style={{gap: '0.5rem', display: 'flex', flexDirection: 'column'}}>
                                <h4 className="effraReg" style={{fontSize: '1.2rem'}}>Bedrooms</h4>
                                <div className="auto-two-column-grid" style={{alignItems: 'center'}}>
                                    <img style={{width: 30, height: 30}} src={bed.src} alt="bedrooms icon" />
                                    <p className="effraReg" style={{fontSize: '1.25rem'}}>x {apiData?.data?.bedrooms}</p>
                                </div>
                            </div>
                            <div className="bathrooms" style={{gap: '0.5rem', display: 'flex', flexDirection: 'column'}}>
                                <h4 className="effraReg" style={{fontSize: '1.2rem'}}>Bathrooms</h4>
                                <div className="auto-two-column-grid" style={{alignItems: 'center'}}>
                                    <img style={{width: 30, height: 30}} src={bath.src} alt="bathrooms icon" />
                                    <p className="effraReg" style={{fontSize: '1.25rem'}}>x {apiData?.data?.bathrooms}</p>
                                </div>
                            </div>
                        </div>
                        <hr style={{margin: '2rem 0'}}/>
                        <ListingImages 
                            apiData={apiData}
                        />
                        <hr style={{margin: '2rem 0'}}/>
                        <div>
                            <h3 className="effraBold">Key Features</h3>
                            <p style={{fontSize: '1.1rem'}} className="my-0_5">{apiData?.data.keyFeatures}</p>
                        </div>
                        <hr style={{margin: '2rem 0'}}/>
                        <div>
                            <h3 className="effraBold">Property Description</h3>
                            <p style={{fontSize: '1.1rem'}} className="my-0_5">{apiData?.data.description}</p>
                        </div>

                    </div>

                    <div className="listing-right">
                        .agent-
                    </div>
                </div>
            </div>
        </>
        )
    }
}



// const { address, agent, bathrooms, bedrooms, createdAt, description, images, keyFeatures, price, propertyType } = apiData.data
=======
    // const { address, agent, bathrooms, bedrooms, createdAt, description, images, keyFeatures, price, propertyType } = apiData.data

    if(isLoading) return <h1>Loading...</h1>
    if(serverError) return <h1>Server Error</h1>

    return (
        <div className="flex center w-100">
            <div className="listing-image-grid">
                <div>{apiData?.data?.address}</div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
>>>>>>> d1c5cd754a02cf7f9de71460fcfe073c6baad9bb
