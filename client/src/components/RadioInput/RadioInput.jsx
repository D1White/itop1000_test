import React from "react";
import "./radio_input.scss";

const RadioInput = ({ setValue, values, title }) => {

    const onChangeValue = (event) => {
        setValue(event.target.value);
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
                            className='radio'
                        />
                        <label htmlFor={`${value}_${index}`} className='radio__text'>
                            {value}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RadioInput;
