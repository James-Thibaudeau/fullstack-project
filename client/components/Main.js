import React from 'react';
import { Link } from 'react-router';
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

export default Main;