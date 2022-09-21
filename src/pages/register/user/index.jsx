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