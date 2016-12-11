import React from 'react';
import LoginBox from './Login/LoginBox';
import NavBar from './Main/NavBar';

class Main extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <LoginBox />

            </div>
        );
    }
};

export default Main;