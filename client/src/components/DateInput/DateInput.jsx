import React from "react";
import DatePicker from "react-date-picker";

import "./date_input.scss";
import close_ico from '../../assets/ico/close.svg'
import calendar_ico from '../../assets/ico/calendar.svg'

const DateInput = ({ title, error, setValue, value }) => {
    return (
        <div className="dateInput">
            <span className="input__title">birthdate</span>
            <DatePicker
                onChange={setValue}
                value={value}
                format={"dd.MM.yyyy"}
                locale={"en"}
                clearIcon={<img src={close_ico} alt="close" />}
                calendarIcon={<img src={calendar_ico} alt="close" />}
                className={"popup-date-picker"}
                calendarClassName={"popup-react-calendar"}
                minDate={new Date("1900-01-01T00:00:00")}
                maxDate={new Date()}
            />
            {error && (
                <span className="input__error">{`${
                    title.charAt(0).toUpperCase() + title.slice(1)
                } is a required field`}</span>
            )}
        </div>
    );
};

export default DateInput;
