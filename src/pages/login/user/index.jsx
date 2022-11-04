import Form from "../../../components/Form"
import useDocTitle from "../../../hooks/useDocTitle"

function UserLogin() {

  useDocTitle('User Login')

    const onSubmitHandler = (form, callback) => {
        console.log(form)
        callback()
      }

  return (
    <div>
        <h1>Login to your account</h1>
        <Form 
            title='Login'
            formArr={formArr}
            submitBtn='Login'
            redirect={null}
        onSubmit={onSubmitHandler}
      />    </div>
  )
}

const formArr = [
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      placeholder: 'john@wrongmove.com',
      required: true,
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: '*********',
      required: true,
    },
  ]
  

export default UserLogin