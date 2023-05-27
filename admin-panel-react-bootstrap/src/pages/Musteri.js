import React from "react"
import Table from "../components/Tablo"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import Olustur from "../components/Olustur"
import Container from "react-bootstrap/esm/Container"

const Musteri = () => {
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <Container className="" fluid>
      <Container>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Düzenlenecek Müşteri'nin id'sini giriniz."
            aria-label="Düzenlenecek Müşteri'nin id'sini giriniz."
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Düzenle ✍️
          </Button>
        </InputGroup>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Kullanıcı Oluştur
        </Button>
        <Olustur show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
      <Container>
        <Table />
      </Container>
    </Container>
  )
}

export default Musteri
