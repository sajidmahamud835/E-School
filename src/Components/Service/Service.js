import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { name, duration, modeltest, price, img } = props.service
    return (
        <section>
            <Col>
                <Card className="w-80">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name} Course</Card.Title>
                        <Card.Text>
                            <p>Duration: {duration} hr</p>
                            <p>Model Test: {modeltest} </p>
                            <p>Price: {price}</p>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </section>
    );
};

export default Service;