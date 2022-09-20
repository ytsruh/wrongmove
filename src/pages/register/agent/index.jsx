import { useState, useEffect } from "react"
import Form from "../../../components/Form"

function index() {
  return (
    <div>
      <h1>Create an account</h1>
      <Form
        title='Agent Registration'
        formArray={formArray}
        submitBtn='Register'
        redirect={null}
      />
    </div>
  )
}

const formArray = [
  {
    label: 'First Name',
    name: 'fname',
    type: 'text'
  },
  {
    label: 'Surname',
    name: 'lname',
    type: 'text'
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email'
  },
  {
    label: 'Agent Name',
    name: 'agent-name',
    type: 'text'
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password'
  },
  {
    label: 'Confirm Password',
    name: 'confirm-password',
    type: 'password'
  }
]

export default index