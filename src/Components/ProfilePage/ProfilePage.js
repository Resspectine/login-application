import React from 'react';
import {connect} from 'react-redux';
import ErrorMessages from "../ErrorMessage/ErrorMessage";
import Social from './Social';
import './style.css';

const ProfilePage = ({profile, loadingProfile, error}) => {
    return loadingProfile ?
        <p>Loading profile</p> :
        error ?
            <ErrorMessages messages={error}/> :
            <div>
                <p>Город: {profile.city && profile.city}</p>
                <p>Знание языков:</p>
                <ul>
                    {profile.languages
                    && profile.languages.map((el, i) =>
                        <li key={i}>{el}</li>
                    )}
                </ul>
                <p>Ссылки:</p>
                <ul>
                    {profile.social
                    && profile.social
                        .sort(el => {
                            return el.label !== 'web' ? 1 : -1;
                        })
                        .map((el, i) =>
                            <li key={i}>
                                <Social {...el}/>
                            </li>
                        )}
                </ul>
            </div>
};

export default connect(
    store => ({
        error: store.error,
        loadingProfile: store.profile.loadingProfile,
        profile: store.profile
    })
)(ProfilePage);
