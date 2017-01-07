import React from 'react';
import { connect } from 'react-redux';
import { ControlLabel, Col, Row, Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';
import TimePicker from 'react-bootstrap-time-picker';
import Select from 'react-select';
import { createAppoinHandler } from '../../actions/AppointmentActions';

class AppointmentForm extends React.Component {
    
    constructor() {
        super();
        let date = new Date();
        let initdate = (date.toISOString().substring(0,11) + '00:00:00.000Z');
        
        this.state = {
            startDate: initdate,
            endDate: initdate,
            startTime: 0,
            endTime: 0,
            guests: []
        };
    }
    
    submit(e) {
        e.preventDefault();
        //form validation should go here
        console.log('submitting');
        const state = this.state;
        const props = this.props;
                  
        let appointment = {
                name: state.name,
                creatorId: props.login.user._id,
                location: {
                      locationName: state.locationName,
                      address: state.address,
                      city: state.city,
                      country: state.country
                  },
                  date: {
                      startDate: state.startDate,
                      endDate: state.endDate
                  },
                  guests: state.guests,
                  description: state.description
        };
        console.log(appointment);
        this.props.submit(appointment);
    }
    
    setValue(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    
    setSelect(value) {
        this.setState({
            guests: value
        });
    }
    
    //these handle date/time functions are not ideal, but the library I used
    //has them setup this way, eventually could use a refactor from 4 functions
    //down to two
    handleStartTime(time) {
        let formatted = new Date(null);
        formatted.setSeconds(time);
        console.log(formatted.toISOString().substring(11));
        
        let newTime = formatted.toISOString().substring(11);
        let oldDate = this.state.startDate.substr(0, 11);
        
        this.setState({
            startDate : (oldDate + newTime),
            startTime: time
        });
        
    }
    
    handleEndTime(time) {
        let formatted = new Date(null);
        formatted.setSeconds(time);
        console.log(formatted.toISOString().substring(11));
        
        let newTime = formatted.toISOString().substring(11);
        let oldDate = this.state.startDate.substr(0, 11);
        
        this.setState({
            endDate : (oldDate + newTime),
            endTime : time
        });
        
    }
    
    handleStartDate(startDate) {
        console.log('start date: ' + startDate);
        let formatted = new Date(null);
        formatted.setSeconds(this.state.startTime);
        console.log(formatted.toISOString().substring(11));
        
        let oldTime = formatted.toISOString().substring(11);
        let newDate = startDate.substr(0, 11);
        
        this.setState({
            startDate: (newDate + oldTime)
        });
    }
    
    handleEndDate(endDate) {
        let formatted = new Date(null);
        formatted.setSeconds(this.state.startTime);
        
        let oldTime = formatted.toISOString().substring(11);
        let newDate = endDate.substr(0, 11);
    
        this.setState({
            endDate: (newDate + oldTime)
        });
    }
    
    renderGroup(id, title, type, func){
        if (type == 'textarea'){
            return (
            <FormGroup>
                <ControlLabel>{title}</ControlLabel>
                <FormControl id={id} componentClass={type} placeholder={title} onChange={func} />
            </FormGroup>
                );
        }
        return (
            <FormGroup>
                <ControlLabel>{title}</ControlLabel>
                <FormControl id={id} type={type} placeholder={title} onChange={func} />
            </FormGroup>
            );
    }
    
    renderSelect() {
        
        const options = this.props.users.map(user => {
            return { value: user._id, label: user.username };
        });
        
        return (
            <FormGroup>
                <ControlLabel>Guests</ControlLabel>
                <Select
                    id="guests"
                    name="guests"
                    multi={true}
                    value={this.state.guests}
                    options={options}
                    onChange={this.setSelect.bind(this)}
                />
            </FormGroup>
        );
    }
    
    renderDateTime() {
        return (
            <Row>
                <Col xs={12} sm={3}>
                    <FormGroup>
                        <ControlLabel>Start Date</ControlLabel>
                        <DatePicker id="startDate" 
                                    showClearButton={false} 
                                    onChange={this.handleStartDate.bind(this)} 
                                    value={this.state.startDate} />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={3}>
                    <FormGroup>
                        <ControlLabel>Start Time</ControlLabel>
                        <TimePicker id="startTime" onChange={this.handleStartTime.bind(this)} value={this.state.startTime} />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={3}>
                    <FormGroup>
                        <ControlLabel>End Date</ControlLabel>
                        <DatePicker id="endDate" 
                                    showClearButton={false} 
                                    onChange={this.handleEndDate.bind(this)} 
                                    value={this.state.endDate} />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={3}>
                    <FormGroup>
                        <ControlLabel>End Time</ControlLabel>
                        <TimePicker id="endTime" onChange={this.handleEndTime.bind(this)} value={this.state.endTime}/>
                    </FormGroup>
                </Col>
            </Row>
            );
    }
    
    render() {
        return (
            <div className="container-fluid">
                <Panel>
                    <Form onSubmit={this.submit.bind(this)}>
                    <Row>
                    <Col xs={12}>
                        <h1>Make an Appointment{' '}<Button bsStyle="success" bsSize="large" type="submit">Create</Button></h1>
                        <hr />
                    </Col>
                    </Row>
                        <Row>
                            <Col xs={12} sm={6}>
                                {this.renderGroup('name', 'Appointment Name', 'text', this.setValue.bind(this))}
                            </Col>
                            <Col xs={12} sm={6}>
                                {this.renderGroup('locationName', 'Location Name', 'text', this.setValue.bind(this))}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={4}>
                                {this.renderGroup('address', 'Address', 'text', this.setValue.bind(this))}
                            </Col>
                            <Col xs={12} sm={4}>
                                {this.renderGroup('city', 'City', 'text', this.setValue.bind(this))}
                            </Col>
                            <Col xs={12} sm={4}>
                                {this.renderGroup('country', 'Country', 'text', this.setValue.bind(this))}
                            </Col>
                        </Row>
                        {this.renderDateTime()}
                        <Row>
                            <Col xs={12} sm={4}>
                                {this.renderSelect()}
                            </Col>
                            <Col xs={12} sm={8}>
                                {this.renderGroup('description', 'Descripion', 'textarea', this.setValue.bind(this))}
                            </Col>
                        </Row>
                    </Form>
                </Panel>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {...state, users: state.users.users};
};

export const AppointmentFormContainer = connect(mapStateToProps, { submit: createAppoinHandler })(AppointmentForm);