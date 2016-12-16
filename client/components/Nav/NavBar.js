import React from 'react';
import { Link } from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button} from 'react-bootstrap';


class NavBar extends React.Component {
  
  renderLogin() {
    return (
      <Navbar.Collapse>
            <Navbar.Form pullRight>
                  <FormGroup>
                    <FormControl type="text" placeholder="User Name" />
                    <FormControl type="text" placeholder="Password" /> 
                  </FormGroup>
                  <Button bsStyle="primary" type="submit">Login</Button>
            </Navbar.Form>
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
          {this.renderLogin()}
        </Navbar>
        
      );
  }
};

export default NavBar;