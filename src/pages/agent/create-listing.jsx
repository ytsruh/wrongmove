import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import AgentNav from "../../components/AgentNav";
import Protected from "../../components/Protected";
import DashboardCard from "../../components/cards/DashboardCard";
import Form from "../../components/Form";
import Alert from "../../components/Alert";

import sale from "../../assets/sale.jpeg";
import rent from "../../assets/rent.webp";

function CreateListing({ form }) {
  const router = useRouter();
  const [errMsg, setErrMsg] = useState(false);
  const [propertyType, setPropertyType] = useState(null);

  const submitSale = async (form, callback) => {
    callback();
    try {
      const user = await JSON.parse(sessionStorage.getItem("user"));
      const res = await fetch("/api/sales", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          token: `${user.token}`,
        },
      });
      if (!res.ok) {
        setErrMsg("Something went wrong");
      }
      const data = await res.json();
      router.push("/agent/");
    } catch (error) {
      console.log(error);
      setErrMsg(error);
    }
  };

  const submitRental = async (form, callback) => {
    callback();
    try {
      const user = await JSON.parse(sessionStorage.getItem("user"));
      const res = await fetch("/api/rentals", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          token: `${user.token}`,
        },
      });
      if (!res.ok) {
        setErrMsg("Something went wrong");
      }
      const data = await res.json();
      router.push("/agent/");
    } catch (error) {
      console.log(error);
      setErrMsg(error);
    }
  };

  return (
    <Protected>
      <div className="dashboard-container center w-100">
        <h1>Create a New Listing</h1>
        <AgentNav />
      </div>
      <div className="flex f-ver gap-3 w-100">
        <div className="create-listing w-100">
          <div className="two-column-grid py-3 w-100">
            <DashboardCard
              title="List a Property for Sale"
              image={sale.src}
              to=""
              onClick={() => setPropertyType("sale")}
            />
            <DashboardCard
              title="List a Property to Rent"
              text=""
              image={rent.src}
              to=""
              onClick={() => setPropertyType("rent")}
            />
          </div>

          {(() => {
            if (propertyType === null) {
              return <></>;
            }
            if (propertyType === "sale") {
              return (
                <div className="sale-form">
                  <Form
                    formArr={saleFormArr}
                    title="Submit a Property for Sale"
                    submitBtn="List Property"
                    redirect={null}
                    onSubmit={submitSale}
                  />
                </div>
              );
            }
            if (propertyType === "rent") {
              return (
                <div className="rental-form">
                  <Form
                    formArr={rentalFormArr}
                    title="Submit a Property for Rental"
                    submitBtn="List Property"
                    redirect={null}
                    onSubmit={submitRental}
                  />
                </div>
              );
            }
          })()}
          {errMsg ? <Alert msg={errMsg} type="error"></Alert> : <></>}
        </div>
      </div>
    </Protected>
  );
}

export default CreateListing;

const saleFormArr = [
  {
    label: "Property Address*",
    name: "address",
    type: "text",
    placeholder: "8 Park Lane London NW82 9GU",
    required: true,
  },
  {
    label: "Price*",
    name: "price",
    type: "number",
    placeholder: "£890,000",
    required: true,
  },
  {
    // change this to show radio boxes
    label: "Property Type*",
    name: "propertyType",
    type: "text",
    placeholder: "Terrace House",
    required: true,
  },
  {
    // should take up 50% width on desktop
    label: "Bedrooms*",
    name: "bedrooms",
    type: "number",
    placeholder: 3,
    required: true,
  },
  {
    // should take up 50% width on desktop
    label: "Bathrooms*",
    name: "bathrooms",
    type: "number",
    placeholder: 3,
    required: true,
  },
  {
    label: "Key Features",
    name: "keyFeatures",
    type: "text",
    placeholder: "Lift, Gym, 2100sq ft, Concierge",
  },
  {
    label: "Description",
    name: "description",
    type: "text",
    placeholder: `This impressive three-bedroom 'Vantage Collection' apartment offering 2,133 sq ft living space spans across half the 19th floor which allows a private entrance directly from the lift.`,
  },
];

const rentalFormArr = [
  {
    label: "Property Address*",
    name: "address",
    type: "text",
    placeholder: "8 Park Lane London NW82 9GU",
    required: true,
  },
  {
    label: "Monthly Rental Price*",
    name: "price",
    type: "number",
    placeholder: "£2000",
    required: true,
  },
  {
    // change this to show radio boxes
    label: "Property Type",
    name: "propertyType",
    type: "text",
    placeholder: "Terrace House",
  },
  {
    // should take up 50% width on desktop
    label: "Bedrooms",
    name: "bedrooms",
    type: "number",
    placeholder: 3,
  },
  {
    // should take up 50% width on desktop
    label: "Bathrooms",
    name: "bathrooms",
    type: "number",
    placeholder: 3,
  },
  {
    label: "Key Features",
    name: "keyFeatures",
    type: "text",
    placeholder: "Lift, Gym, 2100sq ft, Concierge",
  },
  {
    label: "Description",
    name: "description",
    type: "text",
    placeholder: `This impressive three-bedroom 'Vantage Collection' apartment offering 2,133 sq ft living space spans across half the 19th floor which allows a private entrance directly from the lift.`,
  },
];
