import { useState } from "react"
import useDeleteData from "../hooks/useDeleteData"

export default function DeleteImages(props) {

    // state

    const [loading, setLoading] = useState(true)
    const [images, setImages] = useState(props.images ? props.images : null)
    const [url, setUrl] = useState(false)
    const { isLoading, serverError, apiData } = useDeleteData(url);

    console.log(images)

  return (
    <div>
        {images?.map((image, index) => (
            <div key={index}>
                <div className="delete-image-container">
                    {isLoading ? <h3>Loading</h3> : <></>}
                    {serverError ? <h3>Server Error</h3> : <></>}
                    <img className="w-100" src={process.env.NEXT_PUBLIC_IMAGES_ENDPOINT + image.file} style={{maxHeight: 350}} />
                    <div className="delete-btn" onClick={() => setUrl(`/api/sales/image/${image.id}`)}>
                        <p>Delete Image</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}