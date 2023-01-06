import { useEffect, useState } from "react"
import useDeleteData from "../hooks/useDeleteData"
import { useRouter } from "next/router"

export default function DeleteImages(props) {

    const router = useRouter()

    const [images, setImages] = useState(props.images ? props.images : null)
    const [url, setUrl] = useState(false)
    const { isLoading, serverError } = useDeleteData(url);

    console.log(images)

  return (
    <div className="two-column-grid" style={{margin: 15, paddingTop: 30}}>
        {images?.map((image, index) => (
            <div key={index}>
                    {isLoading ? <h3>Deleting...</h3> : <></>}
                    {serverError ? <h3>Server Error</h3> : <></>}
                    <div style={{
                          backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGES_ENDPOINT + image.file})`,
                          width: '100%',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center',
                          borderRadius: '0.5rem',
                          padding: '1rem'
                        }}
                        className='end h-300x600'
                        >
                        {/* <img src={process.env.NEXT_PUBLIC_IMAGES_ENDPOINT + image.file} style={{height: '100%', maxHeight: 300}} /> */}
                        <button className="btn btn-primary" 
                        onClick={() => {
                            setUrl(`/api/sales/image/${image.id}`)
                            setImages(props.images)
                            router.push('/agent/dashboard')
                            }
                        }
                        >Delete Image</button>
                    </div>
            </div>
        ))}
    </div>
  )
}