import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"

const Olustur = (props) => {
  const checkTitle = (props) => {
    let title = props.title
    if (title.includes("Düzenle") || title.includes("Oluştur")) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup>
              <Form.Control
                as="textarea"
                placeholder={props.placeholder}
                aria-label="With textarea"
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={props.onHide}>
              Onayla
            </Button>
          </Modal.Footer>
        </Modal>
      )
    } else {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup>
              <Form.Control
                as="input"
                placeholder={`Silinecek ${props.title.split(" ")[0]} ID'si`}
                aria-label="With textarea"
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={props.onHide}>
              Onayla
            </Button>
          </Modal.Footer>
        </Modal>
      )
    }
  }

  return checkTitle(props)
}

export default Olustur
