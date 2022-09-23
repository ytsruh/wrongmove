import Form from "../../../components/Form"

function index() {

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
      placeholder: 'john@wrongmove.com'
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: '*********'
    },
  ]
  

export default index