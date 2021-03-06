import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import { Col, Panel, Row } from 'react-bootstrap';


class AppointmentCard extends React.Component {
    
    dateFormat(ISOdate){
        return moment.parseZone(ISOdate).format('dddd MMMM Do YYYY, hh:mm a');
    }
    
    formatGuests(guests){
        let guestString = '';
        guests.map(guest => {
            guestString = guestString + ' ' + guest.label;
        });
        return guestString;
    }
    
    renderRow(header, content) {
        return (
            <Row>
                <Col xs={12} sm={2}>
                    <p><strong>{header}</strong></p>
                    <hr />
                </Col>
                <Col xs={12} sm={10}>
                    <p>{content}</p>
                </Col>
            </Row>
            );
    }
    
    render() {
        return (
           <Panel collapsible header={<strong>{this.props.header}</strong>} className="green-panel">
                <div>
                    <Col xs={12}>
                        <div>
                            <Row>
                            <Col xs={12} sm={6}>
                                <Row>
                                    <Col xs={12}>
                                        <strong>When</strong>
                                        <hr />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs={12}>
                                                Start: {this.dateFormat(this.props.date.startDate)}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12}>
                                                End: {this.dateFormat(this.props.date.endDate)}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                </Col>
                            <Col xs={12} sm={6}>
                                <Row>
                                    <Col xs={12}>
                                        <strong>Where</strong>
                                        <hr />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <Row>
                                            <Col xs={12}>
                                                Location Name: {this.props.location.locationName || 'none'}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12}>
                                                Address: {this.props.location.address || 'none'}
                                                <br />
                                                City: {this.props.location.city || 'none'}
                                                <br />
                                                Country: {this.props.location.country || 'none'}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                </Col>
                            </Row>
                            <hr />
                            {this.renderRow('Description', (this.props.description || 'no description'))}
                        </div>
                        <hr />
                        {this.renderRow('Guests', this.formatGuests(this.props.guests))}
                    </Col>
                </div>
           </Panel>
        );
    }
};

AppointmentCard.defaultProps = {
  location: {
      locationName: '',
      address: '',
      city: '',
      country: ''
  },
  description: ''
};

AppointmentCard.propTypes = {
  location: React.PropTypes.object,
  description: React.PropTypes.string
};

export default AppointmentCard;