import newListing from '../assets/newListing.png'
import Image from 'next/image'

function Card(props) {
  return (
    <div className="card">
        <div className="card-image" style={{backgroundImage: `url(${newListing.src})`}}></div>
        <div className="card-content">
            <label>BE INSPIRED</label>
            <p className='card-content-title'>Make your one day today</p>
            <p className="card-content-copy">Our new campaign celebrates the freedom that comes with making the move you've been longing for.</p>
        </div>
    </div>
  )
}

export default Card