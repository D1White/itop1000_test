import React from "react";
import { useDispatch } from 'react-redux'

import "./profile_card.scss";
import { deleteProfile } from '../../redux/actions/profiles'

const ProfileCard = ({ name, gender, birthdate, city, id, setEditableProfile }) => {
    const dispatch = useDispatch();

    const ConvertDate = () => {
        const date = new Date(birthdate);
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const yyyy = date.getFullYear();
        return `${dd}/${mm}/${yyyy}`
    }

    const Delete = () => {
        dispatch(deleteProfile(id));
    }

    const Edit = () => {
        setEditableProfile(id);
    }

    return (
        <div className="profileCard">
            <div className="profileCard__content">
                <h3 className="profileCard__title">{name}</h3>
                <span className="profileCard__text">{gender}</span>
                <span className="profileCard__text">{ConvertDate()}</span>
                <span className="profileCard__text">{city}</span>
            </div>
            <div className="profileCard__buttons">
                <button className="profileCard__button edit" onClick={Edit}>
                    <span>edit</span>
                    <svg
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16.1253 4.79486L5.72984 15.1904L2.51571 15.576L2.90141 12.3619L13.2969 1.96643C13.3061 1.96378 13.3158 1.9611 13.3258 1.95839C13.4626 1.92133 13.6605 1.88264 13.8925 1.87944C14.3367 1.87331 14.9278 1.99293 15.5133 2.57843C16.0988 3.16392 16.2184 3.75504 16.2123 4.19925C16.2091 4.43131 16.1704 4.6292 16.1334 4.766C16.1307 4.77601 16.128 4.78563 16.1253 4.79486Z"
                            stroke="#4E4B66"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <path
                            d="M10.7003 3.14871L14.7409 7.18932"
                            stroke="#4E4B66"
                            strokeWidth="2"
                        />
                    </svg>
                </button>
                <button className="profileCard__button delete" onClick={Delete}>
                    <span>delete</span>
                    <svg
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.05874 14.6498L3.55125 4.5H16.4488L15.9413 14.6498C15.8614 16.2464 14.5436 17.5 12.945 17.5H7.055C5.45637 17.5 4.13857 16.2464 4.05874 14.6498Z"
                            stroke="#4E4B66"
                            strokeWidth="2"
                        />
                        <path
                            d="M7.25 4H12.75V3.5C12.75 2.39543 11.8546 1.5 10.75 1.5H9.25C8.14543 1.5 7.25 2.39543 7.25 3.5V4Z"
                            stroke="#4E4B66"
                            strokeWidth="2"
                        />
                        <path
                            d="M1.75 4.25H18.25"
                            stroke="#4E4B66"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <path
                            d="M12.25 8.75V12.5"
                            stroke="#4E4B66"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <path
                            d="M7.75 8.75V12.5"
                            stroke="#4E4B66"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ProfileCard;
