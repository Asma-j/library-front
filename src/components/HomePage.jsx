import React from "react";
import { Card, Row, Col } from "react-bootstrap";
export default function HomePage() {
  return (
    <Row>
      <Col md={12}>
        <h1>Library</h1>
      </Col>
      <Col md={6}>
        <Card bg="success">
          <Card.Img height={"120px"} src="/img/student.jpg"></Card.Img>
          <Card.Body>Students</Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card bg="info">
          <Card.Img height={"120px"} src="/img/book.jpg"></Card.Img>
          <Card.Body>Books</Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
