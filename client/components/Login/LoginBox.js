import React from 'react';
import { Button, Checkbox, Col, ControlLabel, Form, FormControl, FormGroup, Panel } from 'react-bootstrap';

class LoginBox extends React.Component {
    
    renderFormGroup(type) {
        return (
            <FormGroup controlId={'formHorizontal' + type}>
                <Col componentClass={ControlLabel} sm={2}>
                    {type}
                </Col>
                <Col sm={10}>
                    <FormControl type={type} placeholder={type} />
                </Col>
            </FormGroup>
            );
    }
    
    render() {
        return (
            <div>
                <Col xs={12} sm={6} md={4}>
                    <Panel header={<h3>Login</h3>} bsStyle="primary">
                        <Form horizontal>
                            {this.renderFormGroup('Email')}
                            {this.renderFormGroup('Password')}
                            <FormGroup>
                                <Col sm={10}>
                                    <Button bsStyle="primary" type="submit">Sign in</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Panel>
                </Col>
            </div>
        );
    }
};

export default LoginBox;