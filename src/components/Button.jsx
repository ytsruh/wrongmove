

function Button(props) {
  return (
    <button className={`${props.className}`}>
        {props.submitBtn}
    </button>
  )
}

export default Button