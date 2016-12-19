import React from 'react';
import { connect } from 'react-redux';
import {Panel, Button} from 'react-bootstrap';
import AppointmentList from './AppointmentList';

class Appointment extends React.Component {
    
    renderList() {
        return <AppointmentList />;
    }
    
    render() {
        return (
            <div className="container">
                <Panel>
                    <h1>Appointments</h1>
                    <hr />
                    {this.renderList()}
                </Panel>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {...state};
};

export const AppointmentContainer = connect(mapStateToProps)(Appointment);