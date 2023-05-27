import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const Header = () => {
  return (
    <Navbar bg="light" variant="light" fixed="top" className="border-bottom">
      <Container>
        <Navbar.Brand href="#home">🏠 Yönetim Paneli</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#ev">📍 Ana Sayfa</Nav.Link>
            <Nav.Link href="#musteriler">🙋‍♂️ Müşteriler</Nav.Link>
            <Nav.Link href="#urunler">📺 Ürünler</Nav.Link>
            <Nav.Link href="#siparisler">💵 Siparişler</Nav.Link>
            <Nav.Link href="#envanter">📦 Envanter</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
