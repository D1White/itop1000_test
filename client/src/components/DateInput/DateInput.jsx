import React from 'react'
import DatePicker from 'react-date-picker'

import './date_input.scss'
import closeIco from '../../assets/ico/close.svg'
import calendarIco from '../../assets/ico/calendar.svg'

const DateInput = ({ title, error, setValue, value }) => (
  <div className="dateInput">
    <span className="input__title">{title}</span>
    <DatePicker
      onChange={setValue}
      value={value}
      format="dd.MM.yyyy"
      locale="en"
      clearIcon={<img src={closeIco} alt="close" />}
      calendarIcon={<img src={calendarIco} alt="close" />}
      className="popup-date-picker"
      calendarClassName="popup-react-calendar"
      minDate={new Date('1900-01-01T00:00:00')}
      maxDate={new Date()}
    />
    {error && (
      <span className="input__error">
        {`${title.charAt(0).toUpperCase() + title.slice(1)} is a required field`}
      </span>
    )}
  </div>
)

export default DateInput
