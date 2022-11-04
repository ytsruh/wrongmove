import Form from "../../../components/Form"
import useDocTitle from "../../../hooks/useDocTitle"

function UserReg() {

  useDocTitle('User Registration')

    const onSubmitHandler = (form, callback) => {
        console.log(form)
        callback()
      }

  return (
    <div>
        <h1>Create an account</h1>
        <Form 
            title='Register for an account'
            formArr={formArr}
            submitBtn='Register'
            redirect={null}
            onSubmit={onSubmitHandler}
      />    </div>
  )
}

const formArr = [
    {
      label: 'Namer',
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
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: '*********',
      required: true
    },
    {
      label: 'Confirm Password',
      name: 'confirm-password',
      type: 'password',
      placeholder: '*********',
      required: true
    }
  ]
  

export default UserReg