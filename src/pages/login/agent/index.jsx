import Form from "../../../components/Form"
import useDocTitle from '../../../hooks/useDocTitle'
import { useEffect } from "react"

function index() {

  useDocTitle('Agent Login')

    const onSubmitHandler = (form, callback) => {
        console.log(form)
        callback()
      }

  return (
    <div>
        <h1>Agent Login</h1>
        <Form 
            title='Login'
            formArr={formArr}
            submitBtn='Login'
            redirect={null}
            onSubmit={onSubmitHandler}
      />    
    </div>
  )
}

const formArr = [
    {
      label: 'Agent Name',
      name: 'agent-name',
      type: 'text',
      placeholder: 'Wrongmove'
    },
    {
        label: 'Email',
        name: 'email',
        type: 'email',
        placeholder: 'john@wrongmove.com'
      },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: '*********'
    }
  ]
  

export default index