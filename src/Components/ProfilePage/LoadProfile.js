import React from 'react';
import {connect} from 'react-redux';
import {getProfileInfo} from "../../Store/actions/actions";
import ProfilePage from './ProfilePage';

const LoadProfile = ({loadProfile, id, ...rest}) => {
    loadProfile(id);

    return <ProfilePage {...rest}/>
};

export default connect(
    store => ({
        id: store.user.userId,
    }),
    dispatch => ({
        loadProfile(id) {
            dispatch(getProfileInfo(id))
        }
    })
)(LoadProfile);
