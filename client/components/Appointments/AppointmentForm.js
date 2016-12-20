import React from 'react';
import { connect } from 'react-redux';
import {Panel, Button} from 'react-bootstrap';

class AppointmentForm extends React.Component {
    
    render() {
        return (
            <div className="container">
                <Panel>
                    AppointmentForm
                </Panel>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {...state};
};

export const AppointmentFormContainer = connect(mapStateToProps)(AppointmentForm);