import Navigasyon from "./components/Navigasyon";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container
      className="d-flex justify-content-center"
      style={{ height: "100vh" }}
      fluid
    >
      <Row>
        <Col>
          <Navigasyon />
        </Col>
        <Row className="justify-content-center">
          <Login />
        </Row>
      </Row>
    </Container>
  );
}

export default App;
