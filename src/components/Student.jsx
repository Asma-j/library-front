import React from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
export default function Student(props) {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1> Students</h1>
        </Col>
        <Col md={6}>
          <Button variant="success">add</Button>
        </Col>
      </Row>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th> Name</th>
              <th>class</th>
              <th>age</th>
              <th>tel</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((students, i) => (
              <tr key={i}>
                <td>1</td>
                <td>{students.name}</td>
                <td>{students.class}</td>
                <td>{students.age}</td>
                <td>{students.tel}</td>
                <td>
                  {" "}
                  <Button variant="danger">delete</Button>
                  <Button>update</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
