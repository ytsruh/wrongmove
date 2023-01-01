import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { formatPrice, parsePropertyType } from "../../utils";

import Protected from "../../components/Protected";
import InlineLink from "../../components/InlineLink";
import useFetchData from "../../hooks/useFetchData";
import useDeleteData from "../../hooks/useDeleteData";

export default function SalesListings() {
  const { isLoading, serverError, apiData } = useFetchData("/api/sales");

  if (isLoading) return <h1>Loading...</h1>;
  if (serverError) return <h1>Error</h1>;

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
  const { data } = props;
  const [url, setUrl] = useState(false);
  const { isLoading, serverError, apiData } = useDeleteData(url);
  const router = useRouter();

  if (apiData) {
    router.push("/agent/dashboard");
  }

  if (isLoading)
    return (
      <tr>
        <td>Loading...</td>
      </tr>
    );
  if (serverError)
    return (
      <tr>
        <td>Loading...</td>
      </tr>
    );

  return (
    <tr className="text-center">
      <td>{data.address}</td>
      <td>{formatPrice(data.price)}</td>
      <td>{parsePropertyType(data.propertyType)}</td>
      <td>{parseInt(data.bedrooms)}</td>
      <td>{parseInt(data.bathrooms)}</td>
      <td>
        <a href={`/agent/sales/edit-listing/${data.id}`}>
          <button className="btn-primary">Edit</button>
        </a>
      </td>
      <td>
        <button onClick={() => setUrl(`/api/sales/${data.id}`)} className="btn-secondary">
          Delete
        </button>
      </td>
    </tr>
  );
};
