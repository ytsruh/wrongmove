import React, { useState, useMemo } from "react"; 
import Link from "next/link";

const prepareForm = (formArr) => {
    return formArr.reduce((r, v) => ({ ...r, [v.name]: "" }), {});
};

const Form = ({ title, formArr, submitBtn, onSubmit, redirect }) => {
    const initialForm = useMemo(() => prepareForm(formArr), [formArr]);
    const [form, setForm] = useState(initialForm);

    const onChangeHandler = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    const onSumbitHandler = () => onSubmit(form, () => setForm(initialForm));

    const hasRedirect = !!redirect;
    return (
        <form autoComplete={"off"}>
            <h3>{title}</h3>
            {formArr.map(({ label, name, type, placeholder, maxLength, minLength, required}, index) => (
                <div className="input-div" key={index}>
                    <label htmlFor={name}>{label}</label>
                    <input
                        id={name}
                        name={name}
                        type={type}
                        value={form[name]}
                        onChange={(e) => onChangeHandler(e)}
                        placeholder={placeholder}
                        maxLength={maxLength}
                        minLength={minLength}
                        required={required}
                        className='form-input'
                    />
                </div>
            ))}
            <button
                    onClick={(e) => {
                    e.preventDefault();
                    onSumbitHandler();
                }}
                className='btn btn-primary'
            >
                {submitBtn}
            </button>
            {hasRedirect && (
                <div>
                    <label>{redirect.label}&nbsp;</label>
                    <Link href={redirect.link.to}>{redirect.link.label}</Link>
                </div>
            )}
        </form>
    );
};

Form.defaultProps = {
    title: "Sign In",
    formArr: [
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
    redirect: null,
};

export default Form;