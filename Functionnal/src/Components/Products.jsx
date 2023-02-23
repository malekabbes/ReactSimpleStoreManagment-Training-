import { useEffect, useState } from "react";
import { Col, Button, Row, Container, Badge, Alert } from "react-bootstrap";
import products from "../mock/Project";
import ProductComponent from "./Product";
import "../assets/styles/product.css";
import NavbarComponent from "./NavbarComponent";

const ProductsComponent = () => {
  const [_available, Setavailable] = useState(true);
  const [welcome_msg, Setwelcome_msg] = useState(false);
  const [listproducts, _Setlistproducts] = useState(products);
  const test = {
    test: "test",
  };

  const Buy = (prod) => {
    if (prod.quantity === 0) {
      Setavailable(false);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      Setwelcome_msg(true);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <NavbarComponent />
      <Container>
        <Row>
          {welcome_msg && (
            <Alert variant="success">
              <Alert.Heading>
                Hey Welcome To Our Shop <b>MyStore</b>
              </Alert.Heading>
              <p>
                Thank you for choosing our store, we hope you enjoy your
                shopping experience !
              </p>
              <hr />
            </Alert>
          )}
          <Button variant="primary" className="product_count">
            Produits : <Badge bg="secondary">{listproducts.length}</Badge>
          </Button>
          <br />
          <br />
          {listproducts.map((prod, index) => (
            <Col key={index}>
              <ProductComponent product={prod} buy={Buy} {...test} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductsComponent;
