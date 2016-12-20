import React from 'react';
import { connect } from 'react-redux';
import {ControlLabel, Col, Row, Panel, Form, FormGroup, FormControl, Button} from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';
import TimePicker from 'react-bootstrap-time-picker';

class AppointmentForm extends React.Component {
    
    constructor() {
        super();
        this.state = {
        };
    }
    
    submit(e) {
        e.preventDefault();
        console.log('submitting');
    }
    
    setText(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    
    setUsername(e) {
        this.setState({
            username: e.target.value,
        });

    }

    setPassword(e) {
        this.setState({
            password: e.target.value,
        });

    }
    
    renderGroup(id, title, type, func){
        return (
            <FormGroup>
                <ControlLabel>{title}</ControlLabel>
                <FormControl id={id} type={type} placeholder={title} onChange={func} />
            </FormGroup>
            );
    }
    
    renderDateTime() {
        return (
            <Row>
                <Col xs={12} sm={3}>
                    <FormGroup>
                        <ControlLabel>Start Date</ControlLabel>
                        <DatePicker id="date" showClearButton={false}/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={3}>
                    <FormGroup>
                        <ControlLabel>Start Time</ControlLabel>
                        <TimePicker />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={3}>
                    <FormGroup>
                        <ControlLabel>End Date</ControlLabel>
                        <DatePicker id="date" showClearButton={false}/>
                    </FormGroup>
                </Col>
                <Col xs={12} sm={3}>
                    <FormGroup>
                        <ControlLabel>End Time</ControlLabel>
                        <TimePicker />
                    </FormGroup>
                </Col>
            </Row>
            );
    }
    
    render() {
        return (
            <div className="container-fluid">
                <Panel>
                    <Form>
                    <Row>
                    <Col xs={12}>
                        <h1>Make an Appointment{' '}<Button bsStyle="success" bsSize="large" type="submit">Create</Button></h1>
                        <hr />
                    </Col>
                    </Row>
                        <Row>
                            <Col xs={12} sm={6}>
                                {this.renderGroup('name', 'Appointment Name', 'text', this.setText.bind(this))}
                            </Col>
                            <Col xs={12} sm={6}>
                                {this.renderGroup('locationName', 'Location Name', 'text', this.setText.bind(this))}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={4}>
                                {this.renderGroup('address', 'Address', 'text', this.setText.bind(this))}
                            </Col>
                            <Col xs={12} sm={4}>
                                {this.renderGroup('city', 'City', 'text', this.setText.bind(this))}
                            </Col>
                            <Col xs={12} sm={4}>
                                {this.renderGroup('country', 'Country', 'text', this.setText.bind(this))}
                            </Col>
                        </Row>
                        {this.renderDateTime()}
                    </Form>
                </Panel>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {...state};
};

export const AppointmentFormContainer = connect(mapStateToProps)(AppointmentForm);