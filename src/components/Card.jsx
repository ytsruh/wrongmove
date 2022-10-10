import newListing from '../assets/newListing.png'
import Image from 'next/image'
import Link from 'next/link'

function Card(props) {
  return (
    <div className="card">
        <div className="card-image" style={{backgroundImage: `url(${props.img})`}}></div>
        <div className="card-content">
            <label>{props.label}</label>
            <p className='card-content-title'>{props.title}</p>
            <p className="card-content-copy">{props.copy}</p>
        </div>
        <div className="card-link inline-link">
            <p><Link href={props.linkTo}>{props.linkText}</Link></p>
        </div>
    </div>
  )
}

Card.defaultProps = {
    img: newListing.src,
    label: "BE INSPIRED",
    title: "Make your one day today",
    copy: "Our new campaign celebrates the freedom that comes with making the move you've been longing for.",
    linkTo: "/login/user",
    linkText: "Take a look",
}

export default Card