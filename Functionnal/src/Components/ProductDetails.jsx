import { useParams } from "react-router-dom";
import _ProductComponent from "./Product";
import products from "../mock/Project";
import { Badge, Container, Row, Col, Card } from "react-bootstrap";

import { useState } from "react";
const ProductDetails = () => {
  const [listproducts, _Setlistproducts] = useState(products);
  const { name } = useParams();
  const ProductDetails = listproducts.find((p) => p.name === name);

  console.log(ProductDetails);

  return (
    <div className="product_detail">
      {/* <ProductComponent product={ProductDetails} /> */}
      <Container style={{ marginTop: "30px" }}>
        <Row>
          <Col md={4}>
            <Card.Img
              variant="top"
              src={require("../assets/images/" + ProductDetails.img)}
              alt="Product Img"
              height="300"
            />
          </Col>
          <Col md={8}>
            <Row>
              <Col md={12}>
                <h1>{ProductDetails.name}</h1>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Badge bg="warning" text="dark">
                  <h5>Description</h5>
                </Badge>
              </Col>
              <Col>
                <p style={{ marginLeft: "50px" }}>
                  {ProductDetails.description}
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Badge bg="warning" text="dark">
                  <h5>Price</h5>
                </Badge>
              </Col>
              <Col>
                <p style={{ marginLeft: "50px" }}>{ProductDetails.price} DT</p>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Badge bg="warning" text="dark">
                  <h5>Likes</h5>
                </Badge>
              </Col>
              <Col>
                <p style={{ marginLeft: "50px" }}>{ProductDetails.like}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;
