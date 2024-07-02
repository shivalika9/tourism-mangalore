import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const Guide = () => (
  <Container>
    <h2>Local Guides</h2>
    <Row>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Guide Name</Card.Title>
            <Card.Text>
              Information about the guide.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Guide;
