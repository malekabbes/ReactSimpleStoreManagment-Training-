import { Container, Navbar } from "react-bootstrap";

const NavbarComponent = () =>{
  
    return (
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">MyStore</Navbar.Brand>
        </Container>
      </Navbar>
    );
  }


export default NavbarComponent;
