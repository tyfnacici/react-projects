import React from "react"
import { useState } from "react"
import Table from "../components/Tablo"
import Button from "react-bootstrap/Button"
import Olustur from "../components/Olustur"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/esm/Col"

const Musteri = () => {
  const [duzenleModalShow, setDuzenleModalShow] = useState(false)
  const [olusturModalShow, setOlusturModalShow] = useState(false)
  const [silModalShow, setSilModalShow] = useState(false)

  return (
    <Col>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <div className="d-flex">
          <Button variant="primary" onClick={() => setDuzenleModalShow(true)}>
            Düzenle
          </Button>
          <Olustur
            title="Müşteri Düzenle"
            show={duzenleModalShow}
            onHide={() => setDuzenleModalShow(false)}
          />
        </div>
        <div className="d-flex gap-3">
          <Button variant="success" onClick={() => setOlusturModalShow(true)}>
            Oluştur
          </Button>
          <Olustur
            title="Müşteri Oluştur"
            show={olusturModalShow}
            onHide={() => setOlusturModalShow(false)}
          />
          <Button variant="danger" onClick={() => setSilModalShow(true)}>
            Sil
          </Button>
          <Olustur
            title="Müşteri Sil"
            show={silModalShow}
            onHide={() => setSilModalShow(false)}
          />
        </div>
      </div>
      <Row className="mt-3">
        <Table />
      </Row>
    </Col>
  )
}

export default Musteri
