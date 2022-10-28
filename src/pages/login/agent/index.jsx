import Form from '../../../components/Form'

function index({ form }) {

    const onSubmitHandler = async (form, callback) => {
        console.log(form)
        callback()

    try {
      const response = await fetch('/api/auth/agent/login', {
        method: 'POST', 
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      console.log(data)
      sessionStorage.setItem('JWT', data.token)
    } catch (error) {
      console.log(error);
    }


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
    }
  ]
  

export default index