import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import DashboardCard from "../../../components/DashboardCard"
import sale from "../../../assets/sale.jpeg"
import rent from "../../../assets/rent.webp"
import newListing from "../../../assets/newListing.png"
import sold from "../../../assets/sold.png"
import charts from "../../../assets/charts.png"

function index() {

    const router = useRouter()

    const [user, setUser] = useState(true)

    useEffect(() => {
        if(!user) {
            router.push('/login/agent')
        }
    }, [])

    if(user) {
        return (
            <div className="center w-100 gap-3">
                <h1>Agent Dashboard</h1>
                <div className="two-column-grid w-100">
                    <DashboardCard 
                        title='For Sale Listings.'
                        text='Click to view your for sale listings.'
                        image={sale.src}
                    />
                    <DashboardCard 
                        title='Rental Listings.'
                        text='Click to view your rental listings.'
                        image={rent.src}
                    />
                </div>
                <div className="one-column-grid w-100">
                <DashboardCard 
                        title='Create a New Listings.'
                        text='Click here to add a new listing.'
                        image={newListing.src}
                    />
                </div>
                <div className="two-column-grid w-100">
                    <DashboardCard 
                        title='Past Listings.'
                        text='Click to view your past (unactive) listings.'
                        image={sold.src}
                    />
                    <DashboardCard 
                        title='Agent Statistics.'
                        text='See your account statistics.'
                        image={charts.src}
                    />
                </div>

            </div>
        )
    }
}

export default index