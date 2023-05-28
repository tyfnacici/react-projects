import React from "react"
import Table from "../components/Tablo"
import Button from "react-bootstrap/Button"
import Olustur from "../components/Olustur"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/esm/Col"

const Musteri = () => {
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <Col>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <div className="d-flex">
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Düzenle
          </Button>
          <Olustur show={modalShow} onHide={() => setModalShow(false)} />
        </div>
        <div className="d-flex gap-3">
          <Button variant="success" onClick={() => setModalShow(true)}>
            Oluştur
          </Button>
          <Olustur show={modalShow} onHide={() => setModalShow(false)} />
          <Button variant="danger" onClick={() => setModalShow(true)}>
            Sil
          </Button>
          <Olustur show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
      <Row className="mt-3">
        <Table />
      </Row>
    </Col>
  )
}

export default Musteri
