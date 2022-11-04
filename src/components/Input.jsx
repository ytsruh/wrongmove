function Input(props) {
    return (
        <input 
          placeholder={props.placeholder}
          minLength={props.minLength}
          maxLength={props.maxLength}
          required={props.required}
          type={props.type}
          className='form-input'
        />
    )
  }
  
  export default Input