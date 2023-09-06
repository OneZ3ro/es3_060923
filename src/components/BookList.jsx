import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = (props) => {
  console.log(props.myArr);
  return (
    <Container fluid>
      <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-4">
        {props.myArr.map((book) => (
          <SingleBook myObj={book} />
        ))}
      </Row>
    </Container>
  );
};
export default BookList;
