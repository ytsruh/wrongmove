import { useState, useEffect } from "react"

export default function ListingImages (props) {

    const [apiData, setApiData] = useState(props.apiData)
    const [img, setImg] = useState()

    useEffect(() => {
        console.log(`img + ${img}`);
    }, [img])
    

    return (
        <div className="four-column-grid listing-images gap-1">
            {apiData.data.images.map((image, index) => (
                <div onClick={() => {
                    setImg(image.file)
                    props.onClick(img)
                }} key={index} className="br-05 pointer" style={{backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGES_ENDPOINT + image.file})`}}></div>
            ))}
        </div>
    )
}