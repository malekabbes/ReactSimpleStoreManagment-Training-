import { Component } from "react";
import { Container, Navbar } from "react-bootstrap";

class NavbarComponent extends Component {
  state = {};
  render() {
    return (
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">MyStore</Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarComponent;
