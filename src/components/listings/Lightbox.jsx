import { useState, useEffect } from "react"

export default function Lightbox ({ lightboxImg, lightboxOpen, onClick }) {
    
    const [image, setImage] = useState()

    useEffect(() => {
        setImage(lightboxImg)
    }, [lightboxImg])

        return (
            <>
                <div className="lightbox-wrapper" id={lightboxOpen ? 'show' : 'hide'}>
                    <div className="lightbox">
                        <div className="bg-img" style={{backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGES_ENDPOINT + image})`}}></div>
                    </div>
                    <div onClick={onClick} className="lightbox-openclose"></div>
                </div>
            </>
        )
}