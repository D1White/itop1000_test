import React from 'react'
import './radio_input.scss'

const RadioInput = ({ setValue, values, title, error, name }) => {
  const onChangeValue = (event) => {
    // setValue(event.target.value)
    setValue((prevState) => {
      const obj = { ...prevState }
      obj[`${name}`] = event.target.value
      return obj
    })
  }

  return (
    <div className="radioInput">
      <span className="radioInput__title">{title}</span>
      <div className="radioInput__block">
        {values.map((value, index) => (
          <div className="radioInput__input" key={`${value}_${index}`}>
            <input
              type="radio"
              id={`${value}_${index}`}
              value={value}
              name={title}
              onChange={onChangeValue}
              className="radio"
            />
            <label htmlFor={`${value}_${index}`} className="radio__text">
              {value}
            </label>
          </div>
        ))}
      </div>
      {error && (
        <span className="input__error">
          {`${title.charAt(0).toUpperCase() + title.slice(1)} is a required field`}
        </span>
      )}
    </div>
  )
}

export default RadioInput
