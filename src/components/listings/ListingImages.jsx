import { useState, useEffect } from "react"

export default function ListingImages (props) {

    const [apiData, setApiData] = useState(props.apiData)
    console.log(apiData);

    return (
        <div className="four-column-grid listing-images gap-1">
            {apiData.data.images[0] ? 
            apiData.data.images.map((image, index) => (
                <div onClick={() => {
                    props.onClick(image)
                }} key={index} className="br-05 pointer" style={{backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGES_ENDPOINT + image.file})`}}></div>
            ))
            : 
            <>
                <div className="br-05 bg-img" style={{backgroundImage: 'url(https://via.placeholder.com/600x200.png?text=Placeholder+Image)'}}></div>
                <div className="br-05 bg-img" style={{backgroundImage: 'url(https://via.placeholder.com/600x200.png?text=Placeholder+Image)'}}></div>
                <div className="br-05 bg-img" style={{backgroundImage: 'url(https://via.placeholder.com/600x200.png?text=Placeholder+Image)'}}></div>
                <div className="br-05 bg-img" style={{backgroundImage: 'url(https://via.placeholder.com/600x200.png?text=Placeholder+Image)'}}></div>
            </>
            }
        </div>
    )
}