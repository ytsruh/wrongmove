import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Protected from "../../components/Protected";
import AgentNav from "../../components/AgentNav";
import useFetchData from "../../hooks/useFetchData";

function Statistics() {
  const { isLoading, serverError, apiData } = useFetchData("/api/stats");

  if (isLoading) return <h1>Loading...</h1>;
  if (serverError) return <h1>Error</h1>;
  console.log(apiData);
  return (
    <Protected>
      <div className="dashboard-container center w-100">
        <h1>Agent Statistics</h1>
        <AgentNav />
      </div>
    </Protected>
  );
}

export default Statistics;
