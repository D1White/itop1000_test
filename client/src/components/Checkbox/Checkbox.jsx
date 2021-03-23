import React from 'react'
import './checkbox.scss'

const Checkbox = ({ setChecked, checked, text, name }) => {
  const handleInputChange = (event) => {
    setChecked((prevState) => {
      const obj = { ...prevState }
      obj[`${name}`] = event.target.checked
      return obj
    })
  }

  return (
    <label className="checkbox__block">
      <input
        type="checkbox"
        name="isAdmin"
        checked={checked}
        onChange={handleInputChange}
        className="checkbox"
      />
      <span className="checkbox__text">{text}</span>
    </label>
  )
}

export default Checkbox
