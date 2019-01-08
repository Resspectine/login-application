import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

const ProfilePage = ({name, loggedIn}) => (
    <div>
        <p>{name}</p>
        {loggedIn &&
        <div>
            <p>You're logged in</p>
            <Link to='/logout'>Log out</Link>
        </div>
        }
    </div>
);

export default connect(
    store => ({
        name: store.user.name,
        loggedIn: store.user.loggedIn
    })
)(ProfilePage);
