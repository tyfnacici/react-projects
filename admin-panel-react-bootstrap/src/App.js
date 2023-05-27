import Navigasyon from "./components/Header"
import "bootstrap/dist/css/bootstrap.min.css"

import Login from "./pages/Login"
import Container from "react-bootstrap/esm/Container"
import Musteri from "./pages/Musteri"

function App() {
  return (
    <Container
      className="d-flex justify-content-center flex-row bg-light text-dark"
      style={{ height: "100vh" }}
      fluid
    >
      <header>
        <Navigasyon />
      </header>
      <main className="align-items-center my-auto">
        {/* <Login /> */}
        <Musteri />
      </main>
    </Container>
  )
}

export default App
