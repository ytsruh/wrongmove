import { useState } from "react"
import Form from "../../../components/Form"

function index() {

  const onSubmitHandler = (form, callback) => {
    console.log(form)
    callback()
  }

  return (
    <div>
      <h1>Create an account</h1>
      <Form 
        title='Agent Registration'
        formArr={formArr}
        submitBtn='Register'
        onSubmit={onSubmitHandler}
        redirect={redirect}
      />
    </div>
  )
}

const formArr = [
  {
    label: 'First Name',
    name: 'fname',
    type: 'text',
    placeholder: 'John',
    required: true
  },
  {
    label: 'Surname',
    name: 'lname',
    type: 'text',
    placeholder: 'McManning',
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
    label: 'Contact Number',
    name: 'phone',
    type: 'tel',
    placeholder: '01214960830',
    minLength: 11,
    maxLength: 11,
    required: true
  },
  {
    label: 'Agent Name',
    name: 'agent-name',
    type: 'text',
    placeholder: 'Wrongmove',
    required: true
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: '*********',
    required: true,
  },
  {
    label: 'Confirm Password',
    name: 'confirm-password',
    type: 'password',
    placeholder: '*********',
    required: true,
  }
]

const redirect = {
  label: 'Already have an account?',
  link: {
    to: '/login/agent',
    label: 'Login'
  }
}

export default index