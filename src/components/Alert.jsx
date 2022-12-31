function Alert(props) {
    return (
      <div className={`alert ${props.type}`}>
          <h4>{`${props.type.toUpperCase()} - ${props.msg}`}</h4>
      </div>
    )
  }
  
  export default Alert