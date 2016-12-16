import React from 'react';
import { Link } from 'react-router';
import { Button, Col, ControlLabel, Form, FormControl, FormGroup, Image, Jumbotron, Panel } from 'react-bootstrap';
import Register from '../Register/RegisterForm';



class Welcome extends React.Component {
    render() {
        return (
            <div className="container">
                <Jumbotron id="welcome">
                    <div>
                        <h1>Welcome to AppointMental</h1>
                        <p>With this amazing app, you can book appointments with your friends!</p>
                        <p>New to the app? Register below! Already have an account login above!</p>
                    </div>
                </Jumbotron>
                <div className="container">
                    <Register type="Register" />
                </div>
            </div>

        );
    }
};

export default Welcome;