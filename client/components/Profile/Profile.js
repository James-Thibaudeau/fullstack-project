import React from 'react';
import { connect } from 'react-redux';
import {Panel, Button} from 'react-bootstrap';

class Profile extends React.Component {
    
    render() {
        return (
            <div className="container">
                <Panel>
                    Profile page
                </Panel>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {};
};

export const ProfileContainer = connect(mapStateToProps)(Profile);