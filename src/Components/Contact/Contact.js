import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <section className="container p-5">
            <h2 className="text-center pb-2">Contact Us</h2>
            <Card>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your Email Address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button className="mx-2 border" variant="primary">Send Email</Button>
                    </Form>
                </Card.Body>
            </Card>
        </section>
    );
};

export default Contact;