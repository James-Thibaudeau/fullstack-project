import React from 'react';
import { Link } from 'react-router';
import { Button, Col, Row,  ControlLabel, Form, FormControl, FormGroup, Panel, PanelGroup } from 'react-bootstrap';
import AppointmentCard from './AppointmentCard';


class AppointmentList extends React.Component {
    
    constructor() {
        super();
        this.state = {
            activeKey: '1'
        };
    }
    
    handleSelect(activeKey) {
        this.setState({ activeKey });
    }


    render() {
        return (
            <div className="container-fluid">
                <Col xs={12}>

                        <AppointmentCard header="Appointment 1" />
                        <AppointmentCard header="Appointment 2" />
                        <AppointmentCard header="Appointment 3" />
                        <AppointmentCard header="Appointment 4" />
                        <AppointmentCard header="Appointment 5" />

                </Col>
            </div>
        );
    }
};

export default AppointmentList;