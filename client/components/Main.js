import React from 'react';
import { Link } from 'react-router';
import NavBar from './Nav/NavBar';
import AppointmentList from './Appointments/AppointmentList';
import AppointmentDetail from './Appointments/AppointmentDetail';
import Welcome from './Main/Welcome';


class Main extends React.Component {
    render() {
        return (
            <div>
               <NavBar />
                <div className="container-fluid">
                    <div id="page-wrapper" style={{height:$(window).height()}}>
                        <Welcome />
                        <AppointmentList />
                        <AppointmentDetail />
                    </div>
                </div>
            </div>

        );
    }
};

export default Main;