import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import InlineLink from "../../components/InlineLink";
import Protected from "../../components/Protected";
import DashboardCard from "../../components/cards/DashboardCard";
import UpdateForm from "../../components/UpdateForm";
import ImageForm from "../../components/ImageForm";
import Alert from "../../components/Alert";
import AgentNav from "../../components/AgentNav";

import useFetchData from "../../hooks/useFetchData";
import useUpdateData from "../../hooks/useUpdateData";

function AgentProfile() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const { isLoading, serverError, apiData } = useFetchData("/api/profile");
  const { isSubmitting, updatedData, updateError } = useUpdateData("/api/profile", shouldSubmit, data);

  if (isSubmitting) return <h1>Submitting...</h1>;
  if (updatedData || updateError) {
    router.push("/agent/");
  }

  if (isLoading) return <h1>Loading...</h1>;
  if (apiData) {
    for (let i = 0; i < formFields.length; i++) {
      const element = formFields[i];
      element.initialvalue = apiData[element.name];
    }
  }

  const onSubmitHandler = async (form) => {
    setData(form);
    setShouldSubmit(true);
  };

  return (
    <Protected>
      <div className="dashboard-container center w-100">
        <h1>Update Agency Profile</h1>
        <AgentNav />
      </div>
      <div className="flex f-ver gap-3 w-100">
        <div className="w-100">
          <div className="two-column-grid">
            <UpdateForm
              fields={formFields}
              title="Update your profile"
              submitBtn="Update"
              onSubmit={onSubmitHandler}
            />
            <div>
              <ImageForm
                formTitle="Update Profile Image"
                buttonText="Upload Image"
                apiEndpoint="/api/profile/image"
                redirectUrl="/agent/dashboard"
              />
              <div className="one-column-grid">
                <div style={styles.card}>
                  <img
                    src={
                      apiData?.image
                        ? process.env.NEXT_PUBLIC_IMAGES_ENDPOINT + apiData.image
                        : "https://via.placeholder.com/600x200.png?text=Placeholder+Image"
                    }
                    alt="Current Agency Image"
                    style={styles.img}
                  />
                  <div style={styles.cardText}>
                    <h5 style={styles.heading}>Current Agency Image</h5>
                    <p style={styles.text}>
                      This is currently shown on your public profile. Update the image to change it
                      immeadiately.
                    </p>
                    <a className="btn-primary" href={`/agents/${apiData?.id}`} style={styles.btn}>
                      View your public profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {serverError ? <Alert msg={"Something went wrong"} type="error"></Alert> : <></>}
        </div>
      </div>
    </Protected>
  );
}

export default AgentProfile;

const formFields = [
  {
    label: "Name*",
    name: "name",
    type: "text",
    required: true,
  },
  {
    label: "Description",
    name: "description",
    type: "text",
    required: false,
  },
  {
    label: "Telephone number",
    name: "telephoneNumber",
    type: "text",
    required: false,
  },
  {
    label: "Website",
    name: "website",
    type: "text",
    required: false,
  },
];

const styles = {
  card: {
    width: "100%",
    padding: "20px",
    backgroundColor: "white",
    border: "1px solid rgb(195, 195, 195)",
    borderRadius: "2.5px",
  },
  img: {
    width: "100%",
    height: "150px",
    borderBottom: "1px solid rgb(195, 195, 195)",
    objectFit: "contain",
  },
  cardText: {
    paddingTop: "10px",
    paddingBottom: "20px",
  },
  heading: {
    fontSize: "1.1rem",
  },
  text: {
    fontSize: "1.05rem",
    paddingTop: "10px",
    paddingBottom: "25px",
  },
  btn: {
    minWidth: "100%",
    borderRadius: "2.5px",
    padding: "0.8rem",
    border: "none",
    fontFamily: "EffraBold",
    fontSize: "1.05rem",
    transition: "300ms",
    marginTop: "10px",
    marginBottom: "20px",
  },
};
