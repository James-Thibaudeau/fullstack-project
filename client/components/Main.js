import React from 'react';
import { Link } from 'react-router';
import NavBar from './Main/NavBar'
import AppointmentList from './Appointments/AppointmentList'


class Main extends React.Component {
    render() {
        return (
            <div>
               <NavBar />
                <div className="container-fluid">
                    <div id="page-wrapper" style={{height:$(window).height()}}>
                        <AppointmentList />
                    </div>
                </div>
            </div>

        );
    }
};

export default Main;