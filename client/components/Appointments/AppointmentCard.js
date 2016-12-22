import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import { Col, Panel, Row } from 'react-bootstrap';


class AppointmentCard extends React.Component {
    
    dateFormat(ISOdate){
        return moment.parseZone(ISOdate).format('dddd MMMM Do YYYY, hh:mm a');
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
                                            <Col xs={6}>
                                                {/*this.props.location.country || 'none'*/}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6}>
                                                {/*this.props.location.address || 'none'*/}
                                                <br />
                                                {/*this.props.location.city || 'none'*/}
                                                <br />
                                                {/*this.props.location.country || 'none'*/}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                </Col>
                            </Row>
                            <hr />
                            {this.renderRow('Descripion', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet rutrum lectus, nec molestie urna suscipit vel. Pellentesque at risus vestibulum, mattis nisl sed, aliquet nisl. Morbi risus metus, luctus nec pretium rhoncus, mollis ut justo. Quisque ac tortor in lectus tempor dignissim. Aenean vel tellus malesuada, condimentum est non, lacinia justo. Quisque egestas luctus arcu at efficitur. Curabitur fermentum dignissim massa, nec vulputate augue euismod vitae. Nam ut ullamcorper lorem. Vivamus elementum urna in magna tempor malesuada. Fusce eget elementum dui, et ullamcorper dui. Proin in eros arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.')}
                        </div>
                        <hr />
                        {this.renderRow('Guests', 'James, Mark, Ilir, Afrim')}
                    </Col>
                </div>
           </Panel>
        );
    }
};

export default AppointmentCard;