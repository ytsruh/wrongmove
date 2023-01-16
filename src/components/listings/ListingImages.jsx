import { useState, useEffect } from "react"

export default function ListingImages (props) {

    const [apiData, setApiData] = useState(props.apiData)

    return (
        <div className="four-column-grid listing-images gap-1">
            {apiData.data.images.map((image, index) => (
                <div onClick={() => {
                    props.onClick(image)
                }} key={index} className="br-05 pointer" style={{backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGES_ENDPOINT + image.file})`}}></div>
            ))}
        </div>
    )
}