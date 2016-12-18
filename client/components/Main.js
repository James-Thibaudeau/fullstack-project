import React from 'react';
import { connect } from 'react-redux';
import NavBar from './Nav/NavBar';
import Welcome from './Main/Welcome';


class Main extends React.Component {
    
    register(username, password) {
        console.log('got back up ' +username+' '+password);
    }
    
    render() {
        return (
            <div>
               <NavBar />
                <div className="container-fluid">
                    <div id="page-wrapper" style={{height:$(window).height()}}>
                        <Welcome submit={this.register}/>
                    </div>
                </div>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {};
};

export const MainContainer = connect(mapStateToProps)(Main);