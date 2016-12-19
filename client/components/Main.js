import React from 'react';
import { connect } from 'react-redux';
import NavBar from './Nav/NavBar';
import Welcome from './Main/Welcome';
import { registerHandler, register } from '../actions/RegisterActions';


class Main extends React.Component {
    
    register(username, password) {
        console.log('made it back up ' +username+' '+password);
        // registerHandler(username, password);
        this.props.register();
    }
    
    render() {
        return (
            <div>
               <NavBar />
                <div className="container-fluid">
                    <div id="page-wrapper" style={{height:$(window).height()}}>
                        <Welcome submit={this.props.registerHandler}/>
                    </div>
                </div>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {};
};

export const MainContainer = connect(mapStateToProps, {registerHandler})(Main);