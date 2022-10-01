import Image from 'next/image'

function DashboardCard(props) {
  return (
        <div className="w-100 center dash-card">
            <div className="w-100">
                <div 
                    className="dash-card-content"
                    style={{backgroundImage: `url(${props.image})`}}
                >
                    <div className="dark-overlay">
                        <h3>{props.title}</h3>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
        </div>
  )
}



export default DashboardCard