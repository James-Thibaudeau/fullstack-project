import React from 'react';
import { Link } from 'react-router';
import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap';


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