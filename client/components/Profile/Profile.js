import React from 'react';
import { connect } from 'react-redux';


class Profile extends React.Component {
    
    render() {
        return (
            <div>
                PROFILE PAGE
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {};
};

export const ProfileContainer = connect(mapStateToProps)(Profile);