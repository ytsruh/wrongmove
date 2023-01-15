import { useState } from "react"

export default function ListingImages (props) {

    const [apiData, setApiData] = useState(props.apiData)
    const [imgId, setImgId] = useState()

    return (

        // add lightbox/modal to view larger image
        <div className="four-column-grid listing-images gap-1">
            {apiData.data.images.map((image, index) => (
                <div onClick={props.onClick} key={index} className="br-05" style={{backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGES_ENDPOINT + image.file})`}}></div>
            ))}
        </div>
    )
}