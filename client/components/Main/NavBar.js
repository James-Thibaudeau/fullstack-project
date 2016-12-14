import React from 'react';
import { Link } from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button} from 'react-bootstrap';


class NavBar extends React.Component {
    render() {
        return (
          <Navbar collapseOnSelect fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">AppointMental</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Navbar.Form pullRight>
                    <FormGroup>
                      <FormControl type="text" placeholder="User Name" />
                      <FormControl type="text" placeholder="Password" /> 
                    </FormGroup>
                    <Button type="submit">Submit</Button>
              </Navbar.Form>
            </Navbar.Collapse>
          </Navbar>
          
        );
    }
};

export default NavBar;