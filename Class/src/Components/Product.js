import { Component } from "react";
import { Badge, Card, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

class Product extends Component {
  state = {
    count: this.props.product.like,
    showAlert: false,
    product_count: this.props.product.quantity,
  };
  handleLike = () => {
    console.log(this.state.count);
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  };
  HandleQuantity = () => {
    if (this.state.product_count > 0) {
      this.setState((prevState) => ({
        product_count: prevState.product_count - 1,
      }));
    }
  };
  ShowAlert = () => {
    this.setState({ showAlert: true });
    this.timeout = setTimeout(() => {
      this.setState({ showAlert: false });
    }, 2000);
  };
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={require(`../assets/images/${this.props.product.img}`)}
          />
          <Card.Body>
            <Card.Title>{this.props.product.name}</Card.Title>
            <Card.Text>{this.props.product.description}</Card.Text>
            <Card.Text>
              <Badge bg="warning" text="dark">
                Price:
              </Badge>
              &nbsp;{this.props.product.price}
            </Card.Text>
            <Card.Text>
              <Badge bg="warning" text="dark">
                Quantity:
              </Badge>
              &nbsp;{this.state.product_count}
            </Card.Text>
            <Card.Text>
              <Badge bg="warning" text="dark">
                Likes:
              </Badge>
              &nbsp;{this.state.count}
            </Card.Text>
            <Button variant="primary" onClick={this.handleLike}>
              Like
            </Button>{" "}
            <Button
              variant="primary"
              onClick={() => {
                this.HandleQuantity(this.props.product);

                this.props.buy(this.props.product);
                this.ShowAlert();
              }}
              disabled={this.props.product.quantity === 0}
            >
              {" "}
              Buy
            </Button>{" "}
            <br></br>
            <br></br>
            {this.state.showAlert && (
              <Alert key="success" variant="success">
                 You bought an Item 
              </Alert>
            )}
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Product;
