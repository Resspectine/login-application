import React from 'react';
import {connect} from 'react-redux';

const Profile = ({name}) => <p>{name}</p>;

export default connect(store => ({name: store.user.name}))(Profile);
