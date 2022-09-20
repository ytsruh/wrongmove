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
        redirect={null}
      />
    </div>
  )
}

const formArr = [
  {
    label: 'First Name',
    name: 'fname',
    type: 'text',
    placeholder: 'John'
  },
  {
    label: 'Surname',
    name: 'lname',
    type: 'text',
    placeholder: 'McManning'
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'john@wrongmove.com'
  },
  {
    label: 'Agent Name',
    name: 'agent-name',
    type: 'text',
    placeholder: 'Wrongmove'
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: '*********'
  },
  {
    label: 'Confirm Password',
    name: 'confirm-password',
    type: 'password',
    placeholder: '*********'
  }
]

export default index