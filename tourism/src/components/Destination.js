import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const Destination = () => (
  <Container>
    <h2>Destinations</h2>
    <Row>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src="destination.jpg" />
          <Card.Body>
            <Card.Title>Destination Name</Card.Title>
            <Card.Text>
              A brief description of the destination.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Destination;
