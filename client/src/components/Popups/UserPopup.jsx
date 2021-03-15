import { useState, useEffect } from 'react'
import './popup.scss'
import { Input, RadioInput } from '../index'

const Popup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');


    return (
        <div className='popup__bg'>
            <div className="popup">
                <Input title='username:' setValue={setUsername} />
                <Input title='email:' setValue={setEmail} />
                <RadioInput
                    title='role:'
                    setValue={setRole}
                    values={['user', 'admin']}
                />
            </div>
        </div>
    )
}

export default Popup
