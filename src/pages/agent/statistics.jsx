import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, ArcElement } from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { parsePropertyType } from "../../utils";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, ArcElement);

import Protected from "../../components/Protected";
import AgentNav from "../../components/AgentNav";
import useFetchData from "../../hooks/useFetchData";

function Statistics() {
  const { isLoading, serverError, apiData } = useFetchData("/api/stats");

  if (isLoading) return <h1>Loading...</h1>;
  if (serverError) return <h1>Error</h1>;

  return (
    <Protected>
      <div className="dashboard-container center w-100">
        <h1>Agent Statistics</h1>
        <AgentNav />
      </div>
      <div className="chart-container">
        <div className="chart-card">
          <SalesChart data={apiData?.sales} />
        </div>
        <div className="chart-card">
          <RentalChart data={apiData?.rentals} />
        </div>
      </div>
    </Protected>
  );
}

export default Statistics;

function SalesChart(props) {
  const { data } = props;
  const labels = [];
  const values = [];
  for (const key in data.data) {
    labels.push(parsePropertyType(key));
    values.push(data.data[key]);
  }
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: { display: false },
      },
      x: {
        grid: { display: false },
      },
    },
  };
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Property Type",
        data: values,
        backgroundColor: "#00deb6",
      },
    ],
  };
  return (
    <>
      <h2 className="chart-title">{data.label}</h2>
      <Bar options={options} data={chartData} />
    </>
  );
}

function RentalChart(props) {
  const { data } = props;
  const labels = [];
  const values = [];
  for (const key in data.data) {
    labels.push(parsePropertyType(key) + " bedrooms");
    values.push(data.data[key]);
  }
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: values,
        backgroundColor: [
          //need 6 colors
          "#FFFFFF",
          "#262637",
          "#00DEB6",
          "#036B75",
          "#0499A8",
          "#005E4D",
        ],
      },
    ],
  };
  return (
    <>
      <h2 className="chart-title">{data.label}</h2>
      <Doughnut data={chartData} options={options} />
    </>
  );
}
