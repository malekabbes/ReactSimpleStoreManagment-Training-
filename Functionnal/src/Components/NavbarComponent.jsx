import { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, _Outlet, useLocation } from "react-router-dom";
import "../assets/styles/product.css";

// const NavigationBar = () => {};

const NavbarComponent = () => {
  const location = useLocation();
  const [url, seturl] = useState(null);

  useEffect(() => {
    seturl(location.pathname);
  }, [location]);
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#home">MyStore</Navbar.Brand>
        <Nav className="me-auto">
          {/* <Link to="/">Prod</Link> */}
          <Nav.Link
            as={Link}
            to="/products"
            className={url === "/products" ? "active" : ""}
          >
            Products
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/test"
            className={url === "/test" ? "active" : ""}
          >
            test1
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
