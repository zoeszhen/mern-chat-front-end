import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css';

function Home() {
  return (
    <Row>
      <Col
        md={6}
        className="d-flex flex-direction-column align-items-center justify-content-center"
      >
        <div>
          <h1>Share the world</h1>
          <p> Chat App let you connect with the world</p>
          <LinkContainer to="/chat">
            <Button variant="success">
              Get start
              {' '}
              <i className="fas fa-comments home-message-icon" />
            </Button>
          </LinkContainer>
        </div>
      </Col>
      <Col md={6} className="home__bg" />
    </Row>
  );
}

export default Home;
