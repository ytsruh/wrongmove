function Input(props) {
    return (
        <input 
          placeholder={props.placeholder}
          minLength={props.minLength}
          maxLength={props.maxLength}
          required={props.required}
          type={props.type}
          className='form-input'
          onChange={props.onChange}
        />
    )
  }
  
  export default Input