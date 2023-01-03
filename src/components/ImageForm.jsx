import React, { useState } from "react";
import { useRouter } from "next/router";
import Form from "./Form";

export default function ImageForm(props) {
  const router = useRouter();
  const [image, setImage] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [message, setMessage] = useState(false);

  const onChangeHandler = (event) => setImage(event.target.files[0]);

  const uploadImage = async (event) => {
    event.preventDefault();
    try {
      setMessage("Uploading...");
      const formData = new FormData();
      formData.append("img", image);
      const user = await JSON.parse(sessionStorage.getItem("user"));
      const response = await fetch(props.apiEndpoint, {
        method: "POST",
        headers: {
          token: user.token,
        },
        body: formData,
      });
      if (!response.ok) {
        setMessage("Error");
      }
      const data = await response.json();
      setMessage(false);
      router.push(props.redirectUrl);
    } catch (err) {
      setMessage("Error");
    }
  };

  if (message)
    return (
      <form>
        <h3>{message}</h3>
      </form>
    );

  return (
    <form autoComplete={"off"} onSubmit={(event) => uploadImage(event)}>
      <h3>{props.formTitle}</h3>
      <div className="input-div">
        <label htmlFor={name}>Image</label>
        <input
          id="image"
          name="image"
          type="file"
          onChange={(e) => onChangeHandler(e)}
          className="form-input"
          accept="image/*"
          required
        />
      </div>
      <button className="btn btn-primary" type="submit">
        {props.buttonText}
      </button>
    </form>
  );
}

ImageForm.defaultProps = {
  apiEndpoint: null,
  formTitle: "Upload Image",
  buttonText: "Upload Image",
  redirectUrl: "/agent/dashboard",
};
