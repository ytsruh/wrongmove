export default function Lightbox ({ lightboxImg, lightboxOpen, onClick }) {
    
        return (
            <>
                <div className="lightbox-wrapper" id={lightboxOpen ? 'show' : 'hide'}>
                    <div className="lightbox">
                        <div className="bg-img flex end" style={{backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGES_ENDPOINT + lightboxImg})`}}>
                            <button onClick={onClick} className="btn btn-primary m-1">Close</button>
                        </div>
                    </div>
                    <div onClick={onClick} className="lightbox-openclose"></div>
                </div>
            </>
        )
}