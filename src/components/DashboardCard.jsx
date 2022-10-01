import Image from 'next/image'

function DashboardCard(props) {
  return (
        <div className="w-100 center dash-card">
            <div className="w-100 h-100">
                <div 
                    className="dash-card-img w-100 h-100"
                    style={{backgroundImage: `url(${props.image})`}}
                >
                    <div className="dark-overlay">
                        <div className="dash-card-content">
                            <h3 className='effraBold'>{props.title}</h3>
                            <p>{props.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}



export default DashboardCard