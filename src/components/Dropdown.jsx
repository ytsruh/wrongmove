import { useState } from "react"

function Dropdown(props) {

    const [open, setOpen] = useState(false)
    const { items } = props

  return (
    <div className="dropdown" onClick={() => setOpen(!open)}>
      <h4>{props.title}</h4>
      <div style={{display: open ? 'block' : 'none'}}>
        {items.map((item, index) => (
          <DropdownItem
            item={item}
            key={index}
            onClick={(value) => {
              props.onClick(value)
            }}
            itemValue={props.itemValue}
          />
        ))}
      </div>
    </div>
  )
}

export default Dropdown

function DropdownItem (props) {
    
    return (
        <div value={props.item} onClick={() => props.onClick(props.item)}>{props.item}</div>
    )
}