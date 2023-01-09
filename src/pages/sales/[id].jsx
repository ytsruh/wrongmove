import { useRouter } from "next/router"
import useFetchPublicData from "../../hooks/useFetchPublicData"

export default function SalesListing() {

    const router = useRouter()
    const { id } = router.query
    const { isLoading, serverError, apiData } = useFetchPublicData(`/api/public/sales/${id}`)
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