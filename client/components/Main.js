import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import NavBar from './Nav/NavBar';
import { WelcomeContainer } from './Main/Welcome';
import { loginHandler } from '../actions/LoginActions';

class Main extends React.Component {
    
    render() {
        return (
            <div>
               <NavBar submit={this.props.loginHandler} isLoggedIn={this.props.isLoggedIn} />
                <div className="container-fluid">
                    <div id="page-wrapper" style={{height:$(window).height()}}>
                        {this.props.children || <WelcomeContainer />}
                    </div>
                </div>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        isLoggedIn: state.login.isLoggedIn
    };
};

export const MainContainer = connect(mapStateToProps, {loginHandler})(Main);