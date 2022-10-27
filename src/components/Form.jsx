import React, { useState, useMemo } from "react";
import Input from '../components/Input'

const prepareForm = (formArr) => {
    return formArr.reduce((r, v) => ({ ...r, [v.name]: "" }), {});
};

const Form = ({ title, formArr, submitBtn, onSubmit, redirect }) => {
    const initialForm = useMemo(() => prepareForm(formArr), [formArr]);
    const [form, setForm] = useState(initialForm);

    const onChangeHandler = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    const onSubmitHandler = () => onSubmit(form, () => setForm(initialForm));

    const hasRedirect = !!redirect;
    return (
        <form>
            <h2>{title}</h2>
            {formArr.map(({ label, name, type, placeholder, maxLength, minLength, required}, index) => (
                <div key={index}>
                    <label htmlFor={name}>{label}</label>
                    <Input
                        id={name}
                        name={name}
                        type={type}
                        value={form[name]}
                        onChange={(e) => onChangeHandler(e)}
                        placeholder={placeholder}
                        maxLength={maxLength}
                        minLength={minLength}
                        required={required}
                    />
                </div>
            ))}
            <button
                onClick={(e) => {
                    e.preventDefault();
                    onSubmitHandler();
                }}
            >
                {submitBtn}
            </button>
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








// import { useState, useMemo, useEffect } from "react";
// import Link from "next/link";
// import Input from './Input'
// import Button from "./Button";

// const prepareForm = (formArr) => {
//     return formArr.reduce((r, v) => ({ ...r, [v.name]: "" }), {});
// };

// const Form = ({ title, formArr, submitBtn, onSubmit, redirect }) => {
//     const [form, setForm] = useState(initialForm);

//     const onChangeHandler = (e) => setForm((formData) => ({ ...formData, [e.target.name]: e.target.value }));

//     useEffect(() => {
//         console.log(form);
//     }, [form])

//     const onSubmitHandler = () => onSubmit(form, () => setForm(initialForm));

//     const hasRedirect = !!redirect;
//     return (
//         <form autoComplete={"off"}>
//             <h2>{title}</h2>
//             {formArr.map(({ label, name, type, placeholder, maxLength, minLength, required}, index) => (
//                 <div className='input-div' key={index}>
//                     <label htmlFor={name}>{label}</label>
//                     <Input
//                         id={name}
//                         name={name}
//                         type={type}
//                         value={form[name]}
//                         onChange={(e) => onChangeHandler(e)}
                        // placeholder={placeholder}
                        // maxLength={maxLength}
                        // minLength={minLength}
                        // required={required}
//                     />
//                 </div>
//             ))}
//             <Button
//                 onClick={(e) => {
//                     e.preventDefault();
//                     onSubmitHandler();
//                 }}
//                 submitBtn={submitBtn}
//                 className='btn-primary'
//             >
//                 {submitBtn}
//             </Button>
//             {hasRedirect && (
//                 <div className="form-redirect-container">
//                     <label>{redirect.label}</label>
//                     <Link href={redirect.link.to}>{` ${redirect.link.label}`}</Link>
//                 </div>
//             )}
//         </form>
//     );
// };

// export default Form;