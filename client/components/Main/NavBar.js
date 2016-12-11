import React from 'react';
import { Link } from 'react-router';
import { MenuItem, Nav, Navbar, NavItem, NavDropdown } from 'react-bootstrap';
import Notifications from '../Generic/Notifications';

class NavBar extends React.Component {
    render() {
        return (

              <Navbar bsStyle="inverse">
                <Navbar.Header>
                  <Navbar.Brand>
                    <Link to="/">FullStack Project</Link>
                  </Navbar.Brand>
                  <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav>
                  <NavItem eventKey={1} >Users</NavItem>
                  <NavItem eventKey={2} >Appointments</NavItem>
                </Nav>
                <Nav pullRight>
                  <NavDropdown eventKey={3} title="Settings" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Profile</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.2}>Logout</MenuItem>
                  </NavDropdown>
                  <Notifications eventKey={4} number={2} />
                </Nav>
                </Navbar.Collapse>
              </Navbar>

        );
    }
};

export default NavBar;