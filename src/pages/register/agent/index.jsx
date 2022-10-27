import { useState } from "react"
import Form from "../../../components/Form"

function index() {

  const onSubmitHandler = async (form, callback) => {
    // callback()
    // Send data to backend
    try {
      const response = await fetch('/api/auth/agent/register', {
        method: 'POST', 
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div>
      <h1 className="text-center">Create an account</h1>
      <div className="two-column-grid">
        <Form 
          title='Agent Registration'
          formArr={formArr}
          submitBtn='Register'
          onSubmit={onSubmitHandler}
          redirect={redirect}
          />
          <div className="center align-left right-column">
            <h3>With an account you can:</h3>
            <ul className="mt-1">
              <li>🔔 Create instant property alerts</li>
              <li>❤️ Save properties</li>
              <li>🔎 Create & save your own search areas</li>
            </ul>
          </div>
      </div>
    </div>
  )
}

const formArr = [
  {
    label: 'Agent Name',
    name: 'name',
    type: 'text',
    placeholder: 'John Smith',
    required: true
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'john@wrongmove.com',
    required: true
  },
  {
    label: 'Telephone Number',
    name: 'telephoneNumber',
    type: 'tel',
    placeholder: '01214960830',
    minLength: 11,
    maxLength: 11,
    required: true
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: '*********',
    required: true,
  },
  // {
  //   label: 'Confirm Password',
  //   name: 'confirm-password',
  //   type: 'password',
  //   placeholder: '*********',
  //   required: true,
  // }
]

const redirect = {
  label: 'Already have an account?',
  link: {
    to: '/login/agent',
    label: 'Login'
  }
}

export default index