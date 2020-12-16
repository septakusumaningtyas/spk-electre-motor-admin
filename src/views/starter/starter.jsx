import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row,
    Col
} from 'reactstrap';
import { Feeds } from 'components/dashboard-components';

const Starter = () => {
    return (
        <div>
            <Row>
                <Col sm={6} lg={8}>
                    <Feeds />
                </Col>
                <Col sm={6} lg={4}></Col>
            </Row>
        </div>
    );
}

export default Starter;
