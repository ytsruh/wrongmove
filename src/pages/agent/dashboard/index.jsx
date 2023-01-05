import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import DashboardCard from "../../../components/cards/DashboardCard";
import sale from "../../../assets/sale.jpeg";
import rent from "../../../assets/rent.webp";
import newListing from "../../../assets/newListing.png";
import charts from "../../../assets/charts.png";
import office from "../../../assets/estate-office.jpg";
import logout from "../../../assets/agent-logout.jpg";
import Protected from "../../../components/Protected";
import useFetchData from "../../../hooks/useFetchData";

function Dashboard() {
  const { isLoading, serverError, apiData } = useFetchData("/api/stats/dashboard");

  if (isLoading) return <h1>Loading...</h1>;
  if (serverError) return <h1>Error</h1>;
  console.log(apiData);

  return (
    <Protected>
      <div className="dashboard-container center w-100">
        <h1>Agent Dashboard</h1>
        <div className="agent-summary">Key statistics go here from API call</div>

        <div className="two-column-grid w-100">
          <DashboardCard
            title="For Sale Listings."
            text="Click to view your for sale listings."
            image={sale.src}
            to="/agent/sales"
          />
          <DashboardCard
            title="Rental Listings."
            text="Click to view your rental listings."
            image={rent.src}
            to="/agent/active/rent"
          />
        </div>
        <div className="one-column-grid w-100">
          <DashboardCard
            title="Create a New Listing."
            text="Click here to add a new listing."
            image={newListing.src}
            to="/agent/create-listing"
          />
        </div>
        <div className="three-column-grid w-100">
          <DashboardCard
            title="Agency Profile"
            text="Click here to update the agency profile"
            image={office.src}
            to="/agent/profile"
          />
          <DashboardCard
            title="Agent Statistics."
            text="See your account statistics."
            image={charts.src}
            to="/agent/statistics"
          />
          <DashboardCard
            title="Logout"
            text="Logout from your account."
            image={logout.src}
            to="/agent/logout"
          />
        </div>
      </div>
    </Protected>
  );
}

export default Dashboard;
