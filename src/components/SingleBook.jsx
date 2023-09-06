import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
    counter: 0,
  };

  render() {
    return (
      <Col
        onClick={() => {
          this.setState({ counter: this.state.counter + 1 });
        }}
      >
        <Card
          style={
            this.state.counter % 2 === 0
              ? { border: "none" }
              : { border: "3px solid red" }
          }
        >
          <Card.Img variant="top" src={this.props.myObj.img} />
          <Card.Body>
            <Card.Title style={{ maxHeight: "48px", overflow: "hidden" }}>
              {this.props.myObj.title}
            </Card.Title>
            <Card.Text>Questo libro costa: {this.props.myObj.price}</Card.Text>
            <Button variant="primary">Compra</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default SingleBook;
