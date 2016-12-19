import React from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import {MenuItem, Nav, NavItem, NavDropdown, Navbar, FormGroup, FormControl, Button} from 'react-bootstrap';


class NavBar extends React.Component {
  
     constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        };
    }
    
    //this is testing
    submit(e) {
        e.preventDefault();
        console.log('submitting');
        this.props.submit(this.state.username, this.state.password);
    }
    
    setUsername(e) {
        this.setState({
            username: e.target.value,
        });

    }

    setPassword(e) {
        this.setState({
            password: e.target.value,
        });

    }
    
    logout() {
      this.props.logoutHandler();
    }
    
    renderSwitch() {
      if(this.props.isLoggedIn) {
        return this.renderNavOptions();
      }
      return this.renderLogin();
    }
  
    renderLogin() {
      return (
        <Navbar.Collapse>
              <Navbar.Form pullRight onSubmit={this.submit.bind(this)}>
                    <FormGroup>
                      <FormControl type="text" placeholder="User Name" onChange={this.setUsername.bind(this)} />
                      <FormControl type="password" placeholder="Password" onChange={this.setPassword.bind(this)}/> 
                    </FormGroup>
                    <Button bsStyle="primary" type="submit" onClick={this.submit.bind(this)}>Login</Button>
              </Navbar.Form>
            </Navbar.Collapse>
        );
    }
  
    renderNavOptions() {
      return (
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">Make an Appointment</NavItem>
                <NavItem eventKey={2} href="#">Appointments</NavItem>
                <NavDropdown eventKey={3} title="Settings" id="basic-nav-dropdown">
                <LinkContainer to="/profile">
                  <MenuItem eventKey={3.1}>Profile</MenuItem>
                </LinkContainer>
                  <MenuItem divider />
                  <MenuItem eventKey={3.2} onClick={this.logout.bind(this)}>Logout</MenuItem>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
        );
    }
  
    render() {
        return (
          <Navbar fluid fixedTop inverse>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">AppointMental</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            {this.renderSwitch()}
          </Navbar>
          
        );
    }
};

export default NavBar;