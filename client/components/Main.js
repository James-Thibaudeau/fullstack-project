import React from 'react';
import { Link } from 'react-router';
import NavBar from './Main/NavBar'
import AppointmentCard from './Appointments/AppointmentCard'


class Main extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>
                <div className="container">
                    <AppointmentCard />
                </div>
            </div>

        );
    }
};

export default Main;