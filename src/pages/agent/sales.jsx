import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Protected from "../../components/Protected";
import InlineLink from "../../components/InlineLink";
import useFetchData from "../../hooks/useFetchData";

export default function SalesListings() {
  const { isLoading, serverError, apiData } = useFetchData("/api/sales");

  if (isLoading) return <h1>Loading...</h1>;
  if (serverError) return <h1>Error</h1>;
  console.log(apiData);
  const rows = apiData?.data.map((item, i) => {
    return <Row key={i} data={item} />;
  });

  return (
    <Protected>
      <div className="dashboard-container center w-100">
        <h1>Sales Listings</h1>
        <div className="agent-summary text-center">
          <InlineLink to="/agent/dashboard" text="Back to Dashboard" />
        </div>
        <div className="agent-summary">
          <div className="one-column-grid w-100">
            <table>
              <thead>
                <tr>
                  <th>Address</th>
                  <th>Price</th>
                  <th>Type</th>
                  <th>Bedrooms</th>
                  <th>Bathrooms</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </table>
          </div>
        </div>
      </div>
    </Protected>
  );
}

const Row = (props) => {
  console.log(props);
  return (
    <tr className="text-center">
      <td>7 Anson Close</td>
      <td>£190,000</td>
      <td>Detached</td>
      <td>3</td>
      <td>2</td>
      <td>
        <button className="btn-primary">Edit</button>
      </td>
      <td>
        <button className="btn-secondary">Delete</button>
      </td>
    </tr>
  );
};
