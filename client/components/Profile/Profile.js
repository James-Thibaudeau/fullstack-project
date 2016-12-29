import React from 'react';
import { connect } from 'react-redux';
import {Panel, Row, Col, Image, FormControl, ControlLabel, Button} from 'react-bootstrap';
import { editProfile, saveProfile } from '../../actions/ProfileActions';

class Profile extends React.Component {
    
    edit() {
        console.log('editing profile');
        this.props.editProfile();
    }
    
    save() {
        console.log('saving profile');
        this.props.saveProfile();
    }
    
    renderButton() {
        if(this.props.profile.editingProfile) {
            return <Button bsStyle="success" onClick={this.save.bind(this)}><i className="fa fa-floppy-o" aria-hidden="true" /></Button>
        }
        return <Button bsStyle="success" onClick={this.edit.bind(this)}><i className="fa fa-pencil-square-o" aria-hidden="true" /></Button>
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
    
    renderField(field, value) {
        return (
             <Row>
                <Col xs={12} sm={2} smOffset={3}>
                    <ControlLabel>{field}</ControlLabel>
                </Col>
                <Col xs={12} sm={4}>
                    <FormControl type="text" defaultValue={value || 'none'} />
                </Col>
            </Row>
        );
    }
    
    renderFieldOrRow(field, value) {
        if(this.props.profile.editingProfile) {
            return this.renderField(field, value);
        }
        return this.renderRow(field, value);
    }
    
    render() {
        return (
            <div className="container">
                <Panel>
                    <Row>
                    <Col xs={12} sm={2}>
                        <Image style={{height: 'auto', width: 'auto'}} src="/static/appointmentImage.png" responsive />
                    </Col>
                    <Col xs={12} sm={10}>
                        <h1>{this.props.login.user.username}'s Profile{' '}{this.renderButton()}</h1>
                    </Col>
                    <Row>
                    <Col xs={12}>
                    <hr />
                    </Col>
                    </Row>
                    </Row>
                    {this.renderFieldOrRow('First Name:', this.props.login.user.firstName)}
                    {this.renderFieldOrRow('Last Name:', this.props.login.user.lastName)}
                    {this.renderFieldOrRow('Email:', this.props.login.user.email)}
                    {this.renderRow('Member Since:', this.props.login.user.createdAt)}
                </Panel>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {...state};
};

export const ProfileContainer = connect(mapStateToProps, { editProfile, saveProfile })(Profile);