import { useState } from "react"
import Link from "next/link"

function Form({ title, formArray, submitBtn, onSubmit, redirect }) {

    const [formData, setFormData] = useState({})

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
        console.log(formData)
    }

    const hasRedirect = !!redirect

  return (
        <form>
            <h2 className="form-title">{title}</h2>
                {formArray.map(({ label, name, type }, index) => (
                    <div className="form-data" key={index}>
                        <label htmlFor={name}>{label}</label>
                        <input onChange={onChange} id={name} name={name} type={type}/>
                    </div>
                ))}
                <button onClick={(e) => {
                    e.preventDefault()
                    onSubmit()
                }}>{submitBtn}</button>
                {hasRedirect && (
                    <div className="redirect">
                        <label>{redirect.label}</label>
                        <Link href={`${redirect.label.link}`}>{redirect.link.label}</Link>
                    </div>
                )}
        </form>
  )
}

// Form.defaultProps = {
//     title: 'Sign In', 
//     formArray: [
//         {
//         label: 'Email',
//         name: 'email',
//         type: 'email'
//         }, 
//         {
//         label: 'Name',
//         name: 'name',
//         type: 'text'   
//         }
//     ],
//     submitBtn: 'Submit',
//     redirect: {
//         label: `Don't have an account?`,
//         link: {
//             label: 'register',
//             to: '/agent-register'
//         }
//     }
// }

export default Form