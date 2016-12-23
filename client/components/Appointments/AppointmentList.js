import React from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';
import AppointmentCard from './AppointmentCard';


class AppointmentList extends React.Component {
    
    constructor() {
        super();
    }
    
    renderAppointments() {
        const appointments = this.props.appointments;
        if(appointments != null && appointments.length != 0){
            return (
                this.props.appointments.map( (appointment, i) => {
                    return (<AppointmentCard key={i} header={appointment.name} {...appointment} />);
                })
            );
        }
        return 'No appointments yet';
    }


    render() {
        return (
            <div className="container-fluid">
                <Col xs={12}>
                    {this.renderAppointments()}
                </Col>
            </div>
        );
    }
};

AppointmentList.defaultProps = {
    appointments: null
};

AppointmentCard.propTypes = {
  appointments: React.PropTypes.array
};

export default AppointmentList;