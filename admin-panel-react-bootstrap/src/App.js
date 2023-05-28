import Navigasyon from "./components/Header"
import "bootstrap/dist/css/bootstrap.min.css"
import Row from "react-bootstrap/esm/Row"
import Login from "./pages/Login"
import Container from "react-bootstrap/esm/Container"
import Musteri from "./pages/Musteri"

function App() {
  return (
    <Container
      className="bg-light text-dark d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
      fluid
    >
      <Row>
        <Navigasyon />
      </Row>
      <Container>
        <Row>
          {/*<Login />*/}
          <Musteri />
        </Row>
      </Container>
    </Container>
  )
}

export default App
