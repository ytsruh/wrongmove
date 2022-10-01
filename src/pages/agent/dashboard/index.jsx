import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import DashboardCard from "../../../components/DashboardCard"
import sale from "../../../assets/sale.jpeg"
import rent from "../../../assets/rent.webp"

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
            <div className="center gap-2 w-100">
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
            </div>
        )
    }
}

export default index