import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const Blog = () => (
  <Container>
    <h2>Travel Blogs</h2>
    <Row>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Blog Post Title</Card.Title>
            <Card.Text>
              A brief summary of the blog post.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Blog;
