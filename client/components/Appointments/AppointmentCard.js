import React from 'react';
import { Link } from 'react-router';
import { Button, Col, Row,  ControlLabel, Form, FormControl, FormGroup, Panel } from 'react-bootstrap';


class AppointmentCard extends React.Component {
    render() {
        return (
           <Panel>
                <Row>
                    <Col xs={3}>
                        Image
                    </Col>
                    <Col xs={3}>
                        Appointment Name
                    </Col>
                    <Col xs={3}>
                        Date
                    </Col>
                </Row>
           </Panel>
        );
    }
};

export default AppointmentCard;