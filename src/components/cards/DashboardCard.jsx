import Link from 'next/link'

function DashboardCard(props) {
  return (
        <div className="w-100 center dash-card" onClick={props.onClick}>
            <div className="w-100 h-100">
                <div 
                    className="dash-card-img w-100 h-100"
                    style={{backgroundImage: `url(${props.image})`}}
                >
                    <Link href={props.to}>
                        <div className="dark-overlay">
                            <div className="dash-card-content">
                                <h3 className='effraBold'>{props.title}</h3>
                                <p>{props.text}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
  )
}



export default DashboardCard