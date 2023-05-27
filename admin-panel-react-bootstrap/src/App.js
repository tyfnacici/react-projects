import Navigasyon from "./components/Header"
import "bootstrap/dist/css/bootstrap.min.css"

import Login from "./pages/Login"
import Container from "react-bootstrap/esm/Container"

function App() {
  return (
    <Container
      className="d-flex justify-content-center flex-row"
      style={{ height: "100vh" }}
    >
      {/* <header>
        <Navigasyon />
      </header> */}
      <main className="align-items-center mx-auto my-auto">
        <Login />
      </main>
    </Container>
  )
}

export default App
