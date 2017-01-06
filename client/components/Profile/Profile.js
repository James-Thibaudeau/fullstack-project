import React from 'react';
import { connect } from 'react-redux';
import {Panel, Row, Col, Image, FormControl, ControlLabel, Button} from 'react-bootstrap';
import { editProfile, saveProfileHandler } from '../../actions/ProfileActions';
import { getUser } from '../../actions/LoginActions';

class Profile extends React.Component {
    
    constructor(){
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        };
    }
    
    componentWillReceiveProps() {
        this.setState({
            firstName: this.props.login.user.firstName || '',
            lastName: this.props.login.user.lastName || '',
            email: this.props.login.user.email || ''
        });
    }
    
    edit() {
        console.log('editing profile');
        const props = this.props.login.user;
        this.setState({
            firstName: props.firstName,
            lastName: props.lastName,
            email: props.email
        });
        this.props.editProfile();
    }
    
    save() {
        console.log('saving profile');
        const user = {
            ...this.state,
        };
        const userId = this.props.login.user._id;
        const username = this.props.login.user.username;
        console.log(user);
        this.props.saveProfile(username, userId, user);
        this.props.getUser(username);
    }
    
    setValue(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    
    renderButton() {
        if(this.props.profile.editingProfile) {
            return <Button bsStyle="success" onClick={this.save.bind(this)}><i className="fa fa-floppy-o" aria-hidden="true" /></Button>;
        }
        return <Button bsStyle="success" onClick={this.edit.bind(this)}><i className="fa fa-pencil-square-o" aria-hidden="true" /></Button>;
    }
    
    renderRow(field, value){
        return (
             <Row>
                <Col xs={12} sm={2} smOffset={3}>
                    <p>{field}</p>
                </Col>
                <Col xs={12} sm={4}>
                    <p>{value || 'none'}</p>
                </Col>
            </Row>
            );
    }
    
    renderField(id, field, value) {
        return (
             <Row>
                <Col xs={12} sm={2} smOffset={3}>
                    <ControlLabel>{field}</ControlLabel>
                </Col>
                <Col xs={12} sm={4}>
                    <FormControl id={id} type="text" placeholder={value || 'none'} onChange={this.setValue.bind(this)} />
                </Col>
            </Row>
        );
    }
    
    renderFieldOrRow(id, field, value) {
        if(this.props.profile.editingProfile) {
            return this.renderField(id, field, value);
        }
        return this.renderRow(field, value);
    }
    
    render() {
        const props = this.props.login.user;
        return (
            <div className="container">
                <Panel>
                    <Row>
                    <Col xs={12} sm={2}>
                        <Image style={{height: 'auto', width: 'auto'}} src="/static/appointmentImage.png" responsive />
                    </Col>
                    <Col xs={12} sm={10}>
                        <h1>{props.username}'s Profile{' '}{this.renderButton()}</h1>
                    </Col>
                    <Row>
                    <Col xs={12}>
                    <hr />
                    </Col>
                    </Row>
                    </Row>
                    {this.renderFieldOrRow('firstName', 'First Name:', props.firstName)}
                    {this.renderFieldOrRow('lastName', 'Last Name:', props.lastName)}
                    {this.renderFieldOrRow('email', 'Email:', props.email)}
                    {this.renderRow('Member Since:', props.createdAt)}
                </Panel>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {...state};
};

export const ProfileContainer = connect(mapStateToProps, { editProfile, saveProfile: saveProfileHandler, getUser })(Profile);