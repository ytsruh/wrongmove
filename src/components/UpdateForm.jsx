import React, { useState } from "react";

const setInitialValues = (formFields) => {
  let initialfields = {};
  formFields.forEach((element) => {
    initialfields[element.name] = element.initialvalue;
  });
  return initialfields;
};

const UpdateForm = ({ title, fields, submitBtn, onSubmit }) => {
  const [form, setForm] = useState(setInitialValues(fields));
  const onChangeHandler = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const onSumbitHandler = () => onSubmit(form);

  return (
    <form autoComplete={"off"}>
      <h3>{title}</h3>
      {fields.map(
        ({ label, name, type, placeholder, maxLength, minLength, required, initialvalue }, index) => (
          <div className="input-div" key={index}>
            <label htmlFor={name}>{label}</label>
            <input
              id={name}
              name={name}
              type={type}
              defaultValue={initialvalue}
              onChange={(e) => onChangeHandler(e)}
              placeholder={initialvalue ? null : placeholder}
              maxLength={maxLength}
              minLength={minLength}
              required={required}
              className="form-input"
            />
          </div>
        )
      )}
      <button
        onClick={(e) => {
          e.preventDefault();
          onSumbitHandler();
        }}
        className="btn btn-primary"
      >
        {submitBtn}
      </button>
    </form>
  );
};

UpdateForm.defaultProps = {
  title: "Sign In",
  fields: [
    {
      label: "Email",
      name: "email",
      type: "text",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
    },
  ],
  submitBtn: "Sign In",
  onSubmit: (form) => console.log(form),
};

export default UpdateForm;
