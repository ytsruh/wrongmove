import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import DashboardCard from '../../../components/cards/DashboardCard'
import sale from "../../../assets/sale.jpeg"
import rent from "../../../assets/rent.webp"
import newListing from "../../../assets/newListing.png"
import sold from "../../../assets/sold.png"
import charts from "../../../assets/charts.png"
import Image from "next/image";

import tempBar from "../../../assets/tempBar.png"
import tempDoughnut from "../../../assets/tempDoughnut.png"

function Dashboard() {

    const [user, setUser] = useState(true)

    useEffect(() => {
        if(!user) {
            router.push('/login/agent')
        }
    }, [user])

    if(user) {
        return (
            <div className="dashboard-container center w-100">
                <h1>Agent Dashboard</h1>
                    <div className="agent-summary">
                        <div className="two-column-grid w-100">
                            <Image className="temporaryImage" src={tempBar} alt='tenporary bar chart'/>
                            <Image className="temporaryImage" src={tempDoughnut} alt='temporary doughnut'/>
                    </div>
                </div>

                <div className="two-column-grid w-100">
                    <DashboardCard 
                        title='For Sale Listings.'
                        text='Click to view your for sale listings.'
                        image={sale.src}
                        to='/agent/active/sale'
                    />
                    <DashboardCard 
                        title='Rental Listings.'
                        text='Click to view your rental listings.'
                        image={rent.src}
                        to='/agent/active/rent'
                    />
                </div>
                <div className="one-column-grid w-100">
                <DashboardCard 
                        title='Create a New Listing.'
                        text='Click here to add a new listing.'
                        image={newListing.src}
                        to='/agent/new-listing'
                    />
                </div>
                <div className="two-column-grid w-100">
                    <DashboardCard 
                        title='Past Listings.'
                        text='Click to view your past (unactive) listings.'
                        image={sold.src}
                        to='/agent/archive/listings'
                    />
                    <DashboardCard 
                        title='Agent Statistics.'
                        text='See your account statistics.'
                        image={charts.src}
                        to='/agent/statistics'
                    />
                </div>

            </div>
        )
    }
}

export default Dashboard