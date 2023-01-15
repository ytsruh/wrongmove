import { useState, useEffect } from "react"

export default function Lightbox ({ lightboxOpen, apiData, onClick }) {

    const [images, setImages] = useState(apiData?.data.images)
    const [activeImg, setActiveImg] = useState(apiData?.data.images[0].file)

    return (
        <>
            <button onClick={onClick}>Open Modal</button>
            <div className="lightbox-wrapper" id={lightboxOpen ? 'show' : 'hide'}>
                <div className="lightbox">
                    <div className="bg-img" style={{backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGES_ENDPOINT + activeImg})`}}>
                        <div onClick={() => setActiveImg(active)} className="left"></div>
                        <div className="right"></div>
                    </div>
                </div>
                <div onClick={onClick} className="lightbox-openclose"></div>
            </div>
        </>
    )
}