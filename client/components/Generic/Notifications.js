import React from 'react';
import { NavItem } from 'react-bootstrap';

class Notifications extends React.Component {
    
    render() {
        const linkStyle = {
            position: 'relative'
        };
        const numStyle = {
              position: 'absolute',
              fontSize: 15,
              bottom: 20,
              right: 25,
              color: '#6F0AAA'
              
        };
            
        return (
                <NavItem style={linkStyle}>
                  <span><i className="fa fa-bell fa-2x" aria-hidden="true"></i></span>
                  <span style={numStyle}>{this.props.number}</span>
                </NavItem>
        );
    }
};

export default Notifications;