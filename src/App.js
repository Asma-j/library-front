import React from "react";
import Books from "./components/Books";
import student from "./components/Student"
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Student from "./components/Student";

const book = [
  { title: "Bla bla", author: "Foulen foulani", pages: 9876543210 },
  { title: "test", author: "Foulen foulani", pages: 9876543211 },
  { title: "azerty", author: "Foulen foulani", pages: 9876543212 },
  { title: "qsdfg", author: "Foulen foulani", pages: 9876543213 },
  { title: "gbf", author: "Foulen foulani", pages: 9876543214 },
  { title: "iolg", author: "Foulen foulani", pages: 9876543215 },
];
const students = [
  { name: "adel", class: 4164545, age: 20, tel: 2555151 },
  { name: "mohamed", class: 4165215, age: 18, tel: 2555151 },
  { name: "amal", class: 8764545, age: 25, tel: 2555151 },
  { name: "asma", class: 4694545, age: 30, tel: 2555151 },
  { name: "oussema", class: 965825, age: 11, tel: 2555151 },
];
function App() {
  return (
    <Container>
      <Student data={students} />
    </Container>
  );
}

export default App;
