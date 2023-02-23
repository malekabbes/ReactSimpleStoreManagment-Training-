import { useState, useEffect } from "react";
import { Badge, Card, Button } from "react-bootstrap";
import { Link, _Outlet, _useLocation } from "react-router-dom";

import Alert from "react-bootstrap/Alert";
import "../assets/styles/product.css";
const ProductComponent = ({ product, buy }) => {
  const [count, SetCount] = useState(product.like);
  const [showAlert, SetshowAlert] = useState(false);
  const [product_count, Setproduct_count] = useState(product.quantity);
  const [BestProduct, SetBestProduct] = useState(false);
  const [BestProductClass, SetBestProductClass] = useState("");

  const handleLike = () => {
    SetCount(count + 1);
  };
  const HandleQuantity = () => {
    if (product_count > 0) {
      Setproduct_count(product_count - 1);
    }
  };
  const ShowAlert = () => {
    SetshowAlert(true);
    setTimeout(() => {
      SetshowAlert(false);
    }, 2000);
  };

  useEffect(() => {
    if (count > 5) {
      SetBestProduct(true);
      SetBestProductClass("bestProduct");
    }
  }, [count]);

  return (
    <div>
      <Card
        style={{ width: "18rem" }}
        className={BestProduct ? BestProductClass : ""}
      >
        <Card.Img
          variant="top"
          src={require(`../assets/images/${product.img}`)}
        />
        <Card.Body>
          <Card.Title>
            <Link to={`/products/${product.name}`}>{product.name}</Link>
          </Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>
            <Badge bg="warning" text="dark">
              Price:
            </Badge>
            &nbsp;{product.price}
          </Card.Text>
          <Card.Text>
            <Badge bg="warning" text="dark">
              Quantity:
            </Badge>
            &nbsp;{product_count}
          </Card.Text>
          <Card.Text>
            <Badge bg="warning" text="dark">
              Likes:
            </Badge>
            &nbsp;{count}
          </Card.Text>
          <Button variant="primary" onClick={handleLike}>
            Like
          </Button>{" "}
          <Button
            variant="primary"
            onClick={() => {
              HandleQuantity(product);
              buy(product);
              ShowAlert();
            }}
            disabled={product.quantity === 0}
          >
            {" "}
            Buy
          </Button>{" "}
          <br></br>
          <br></br>
          {showAlert && (
            <Alert key="success" variant="success">
               You bought an Item 
            </Alert>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductComponent;
