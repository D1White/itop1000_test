import React from 'react'
import './checkbox.scss'

const Checkbox = ({ setChecked, checked, text }) => {
  const handleInputChange = (event) => {
    setChecked(event.target.checked)
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
