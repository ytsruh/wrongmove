import { useState } from "react"
import { thousandsFormatting } from '../utils'

function Dropdown(props) {

    const [open, setOpen] = useState(false)
    const { items } = props

  return (
    <div className="dropdown" onClick={() => setOpen(!open)}>
      <h4 className="effraBold">{props.title} &#x25BC;</h4>
      <div className="dropdown-div" style={{display: open ? 'flex' : 'none'}}>
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
        <div 
          className='dropdown-item effraReg' 
          value={props.item}
          onClick={() => props.onClick(props.item)}
        >
          {thousandsFormatting(props.item)}
        </div>
    )
}