import React from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';
import AppointmentCard from './AppointmentCard';


class AppointmentList extends React.Component {
    
    constructor() {
        super();
    }
    
    renderAppointments() {
        if(this.props.appointments){
            return (
                this.props.appointments.map( (appointment, i) => {
                    return (<AppointmentCard key={i} header={appointment.name} {...appointment} />);
                })
            );
        }
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

export default AppointmentList;