import React from 'react';
import { connect } from 'react-redux';
import {Panel} from 'react-bootstrap';
import AppointmentList from './AppointmentList';
import { getAppointmentHandler } from '../../actions/AppointmentActions';

class Appointment extends React.Component {
    
    constructor(){
        super();
    }
    
    getAppointments() {
        this.props.getAppointmentHandler(this.props.login.user._id);
    }
    
    componentDidMount(){
        this.getAppointments();
    }
    
    render() {
        return (
            <div className="container">
                <Panel>
                    <h1>Appointments</h1>
                    <hr />
                    <AppointmentList {...this.props.appointments } />
                </Panel>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {...state};
};

export const AppointmentContainer = connect(mapStateToProps, {getAppointmentHandler})(Appointment);