import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./MessageForm.css";

const MessageForm = () => {
  const handleSubmit = (second) => {
    return;
  };
  return (
    <>
      <div className="messages-output"></div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={11}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Your message"
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col md={1}>
            <Button
              variant="primary"
              type="submit"
              style={{ width: "100%", background: "orange" }}
            >
              <i className="fas fa-paper-plane"></i>
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default MessageForm;
