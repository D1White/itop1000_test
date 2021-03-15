import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './profiles.scss';
import { ProfileCard } from '../index'
import plus_ico from '../../assets/ico/plus.svg'

const Profiles = () => {
    return (
        <div className='profiles'>
            <div className="container">
                <div className="profiles__content">
                    <h2 className="block__title">Profiles:</h2>
                    <div className="profiles__block">
                        <ProfileCard />
                        <div className="profileCard add">
                            <img src={plus_ico} alt="add"/>
                            <span>Crearte new profile</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profiles
