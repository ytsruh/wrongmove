import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import InlineLink from "../../components/InlineLink";
import Protected from "../../components/Protected";
import DashboardCard from "../../components/cards/DashboardCard";
import UpdateForm from "../../components/UpdateForm";
import ImageForm from "../../components/ImageForm";
import Alert from "../../components/Alert";
import Card from "../../components/cards/Card";
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
    router.push("/agent/dashboard");
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
                <Card
                  label=""
                  title="Current Agency Image"
                  img={
                    apiData?.image
                      ? process.env.NEXT_PUBLIC_IMAGES_ENDPOINT + apiData.image
                      : "https://via.placeholder.com/600x200.png?text=Placeholder+Image"
                  }
                  copy="This is currently shown on your public profile. Update the image to change it immeadiately."
                  linkTo={`/agents/${apiData?.id}`}
                  linkText="View your public profile"
                />
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
