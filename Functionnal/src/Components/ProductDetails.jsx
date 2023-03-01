import { useParams } from "react-router-dom";
import _ProductComponent from "./Product";
import products from "../mock/Project";
import { Badge, Container, Row, Col, Card } from "react-bootstrap";

import { useEffect, useState } from "react";
import { getallProducts } from "../service/api";

const ProductDetails = () => {
  /* const [listproducts, _Setlistproducts] = useState(products); */
  const { id } = useParams();
  console.log("id", id);
  const [product, setProduct] = useState();

  // const ProductDetails = listproducts.find((p) => p.name === name);
  const getProductById = async (productId) => {
    const response = await getallProducts(productId);
    console.log("response", response.data);
    setProduct(response.data);
  };

  useEffect(() => {
    getProductById(id);
  }, []);

  return (
    <div className="product">
      {product === undefined ? (
        <h1>Product Not Found</h1>
      ) : (
        <Container style={{ marginTop: "30px" }}>
          <Row>
            <Col md={4}>
              <Card.Img
                variant="top"
                src={require("../assets/images/" + product.img)}
                alt="Product Img"
                height="300"
              />
            </Col>
            <Col md={8}>
              <Row>
                <Col md={12}>
                  <h1>{product.name}</h1>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Badge bg="warning" text="dark">
                    <h5>Description</h5>
                  </Badge>
                </Col>
                <Col>
                  <p style={{ marginLeft: "50px" }}>{product.description}</p>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Badge bg="warning" text="dark">
                    <h5>Price</h5>
                  </Badge>
                </Col>
                <Col>
                  <p style={{ marginLeft: "50px" }}>{product.price} DT</p>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Badge bg="warning" text="dark">
                    <h5>Likes</h5>
                  </Badge>
                </Col>
                <Col>
                  <p style={{ marginLeft: "50px" }}>{product.like}</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
      {/* <ProductComponent product={ProductDetails} /> */}
    </div>
  );
};

export default ProductDetails;
