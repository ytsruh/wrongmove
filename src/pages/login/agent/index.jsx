import Form from '../../../components/Form'

function index({ form }) {

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
      placeholder: 'Wrongmove',
      required: true,
    },
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