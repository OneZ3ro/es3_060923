import { Button, Card, Col } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={props.myObj.img} />
        <Card.Body>
          <Card.Title style={{ maxHeight: "48px", overflow: "hidden" }}>
            {props.myObj.title}
          </Card.Title>
          <Card.Text>Questo libro costa: {props.myObj.price}</Card.Text>
          <Button variant="primary">Compra</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default SingleBook;
