import React from 'react';
import {Jumbotron } from 'react-bootstrap';
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
                    <Register type="Register" submit={this.props.submit} />
                </div>
            </div>

        );
    }
};

export default Welcome;