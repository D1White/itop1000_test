import React from 'react'
import './input.scss';

const Input = ({ title, error, width = 300, type='text', setValue }) => {

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className='input' style={{width}}>
            <span className="input__title">{title}</span>
            <input
                type={type}
                className={`input__field ${error ? 'error' : ''}`}
                onChange={handleChange}
            />
        </div>
    )
}

export default Input
