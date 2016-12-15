import React from 'react';
import { Link } from 'react-router';
import { Button, Col, Row,  ControlLabel, Form, FormControl, FormGroup, Panel } from 'react-bootstrap';


class AppointmentCard extends React.Component {
    render() {
        return (
           <Panel header={this.props.header}>
           </Panel>
        );
    }
};

export default AppointmentCard;