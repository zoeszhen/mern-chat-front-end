import React from 'react';
import {
  Form, Row, Col, Button,
} from 'react-bootstrap';
import './MessageForm.css';

function MessageForm() {
  const handleSubmit = () => {};
  return (
    <>
      <div className="messages-output" />
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={11}>
            <Form.Group>
              <Form.Control type="text" placeholder="Your message" />
            </Form.Group>
          </Col>
          <Col md={1}>
            <Button
              variant="primary"
              type="submit"
              style={{ width: '100%', background: 'orange' }}
            >
              <i className="fas fa-paper-plane" />
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default MessageForm;
