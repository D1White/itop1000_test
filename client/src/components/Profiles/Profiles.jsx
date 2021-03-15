import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./profiles.scss";
import { ProfileCard } from "../index";
import { fetchProfiles } from "../../redux/actions/profiles";
import plus_ico from "../../assets/ico/plus.svg";

const Profiles = ({ setEditableProfile }) => {
    const dispatch = useDispatch();
    const { profiles, isLoading } = useSelector(({ profiles }) => profiles);

    useEffect(() => {
        dispatch(fetchProfiles());
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    const createProfile = () => {
        setEditableProfile('create');
    }


    return (
        <div className="profiles">
            <div className="container">
                <div className="profiles__content">
                    <h2 className="block__title">Profiles:</h2>
                    {isLoading ? (
                        <h2>Loading</h2>
                    ) : (
                        <div className="profiles__block">
                            {profiles.map((profile) => (
                                <ProfileCard
                                    key={profile._id}
                                    name={profile.name}
                                    gender={profile.gender}
                                    birthdate={profile.birthdate}
                                    city={profile.city}
                                    id={profile._id}
                                    setEditableProfile={setEditableProfile}
                                />
                            ))}
                            <div className="profileCard add" onClick={createProfile}>
                                <img src={plus_ico} alt="add" />
                                <span>Crearte new profile</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profiles;
