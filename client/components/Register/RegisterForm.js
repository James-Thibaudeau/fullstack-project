import React from 'react';
import { Button, Col, ControlLabel, Form, FormControl, FormGroup, Panel } from 'react-bootstrap';


class Register extends React.Component {
    
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        };
    }
    
    //this is testing
    submit(e) {
        e.preventDefault();
        console.log('submitting');
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
    
    renderFormGroup(type, func) {
        return (
            <FormGroup controlId={'formHorizontal' + type}>
                <Col componentClass={ControlLabel} sm={2}>
                    {type}
                </Col>
                <Col sm={10}>
                    <FormControl onChange={func} type={type} placeholder={type} />
                </Col>
            </FormGroup>
            );
    }
    
    render() {
        return (

                <Col xs={12} md={6} mdOffset={3} lg={6} lgOffset={3}>
                    <Panel header={<h3>{this.props.type}</h3>} bsStyle="default">
                        <Form horizontal onSubmit={this.submit.bind(this)}>
                            {this.renderFormGroup('Username', this.setUsername.bind(this))}
                            {this.renderFormGroup('Password', this.setPassword.bind(this))}
                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button bsStyle="primary" type="submit">{this.props.type}</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Panel>
                </Col>

        );
    }
};

export default Register;