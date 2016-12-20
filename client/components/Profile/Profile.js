import React from 'react';
import { connect } from 'react-redux';
import {Panel, Row, Col, Image, Button} from 'react-bootstrap';

class Profile extends React.Component {
    
    renderRow(field, value){
        return (
             <Row>
                <Col xs={12} sm={4} smOffset={2}>
                    <p>{field}</p>
                </Col>
                <Col xs={12} sm={4} smOffset={2}>
                    <p>{value || 'none'}</p>
                </Col>
            </Row>
            );
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
                        <h1>{this.props.login.user.username}'s Profile</h1>
                    </Col>
                    <Row>
                    <Col xs={12}>
                    <hr />
                    </Col>
                    </Row>
                    </Row>
                    {this.renderRow('First Name:', this.props.login.user.firstName)}
                    {this.renderRow('Last Name:', this.props.login.user.lastName)}
                </Panel>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {...state};
};

export const ProfileContainer = connect(mapStateToProps)(Profile);