import React from 'react'
import './input.scss'

const Input = ({ title, error, width = 300, type = 'text', setValue, name }) => {
  const handleChange = (event) => {
    setValue((prevState) => {
      const obj = { ...prevState }
      obj[`${name}`] = event.target.value
      return obj
    })
  }

  return (
    <div className="input" style={{ width }}>
      <span className="input__title">{title}</span>
      <input
        type={type}
        className={`input__field ${error ? 'error' : ''}`}
        onChange={handleChange}
      />
      {error && (
        <span className="input__error">
          {`${title.charAt(0).toUpperCase() + title.slice(1)} is a required field`}
        </span>
      )}
    </div>
  )
}

export default Input
