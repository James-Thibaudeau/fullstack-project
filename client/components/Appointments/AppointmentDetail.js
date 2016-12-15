import React from 'react';
import { Link } from 'react-router';
import { Col, Panel, Row } from 'react-bootstrap';


class AppointmentDetail extends React.Component {
    
    renderRow(header, content) {
        return (
            <Row style={{padding: '2px'}}>
                <Col xs={2}>
                    {header}
                </Col>
                <Col xs={10}>
                    {content}
                </Col>
            </Row>
            );
    }
    
    render() {
        return (
           <Panel>
                <div>
                    <h3>Appointment</h3>
                    <hr></hr>
                </div>
                <div>
                    <Col xs={6}>
                        <div>
                            <h5>Details</h5>
                            <hr></hr>
                            {this.renderRow('When:', '1 January 5:00pm')}
                            {this.renderRow('Where:', '123 Fake Street')}
                            <hr></hr>
                            {this.renderRow('Descripion:', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet rutrum lectus, nec molestie urna suscipit vel. Pellentesque at risus vestibulum, mattis nisl sed, aliquet nisl. Morbi risus metus, luctus nec pretium rhoncus, mollis ut justo. Quisque ac tortor in lectus tempor dignissim. Aenean vel tellus malesuada, condimentum est non, lacinia justo. Quisque egestas luctus arcu at efficitur. Curabitur fermentum dignissim massa, nec vulputate augue euismod vitae. Nam ut ullamcorper lorem. Vivamus elementum urna in magna tempor malesuada. Fusce eget elementum dui, et ullamcorper dui. Proin in eros arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.')}
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div>
                            <h5>Guests</h5>
                            <hr></hr>
                        </div>
                    </Col>
                </div>
           </Panel>
        );
    }
};

export default AppointmentDetail;