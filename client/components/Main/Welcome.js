import React from 'react';
import { connect } from 'react-redux';
import {Jumbotron } from 'react-bootstrap';
import Register from '../Register/RegisterForm';
import { registerHandler, register } from '../../actions/RegisterActions';

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
                    <Register type="Register" submit={this.props.registerHandler} />
                </div>
            </div>

        );
    }
};

function mapStateToProps(state) {
    return {};
};

export const WelcomeContainer = connect(mapStateToProps, {registerHandler})(Welcome);