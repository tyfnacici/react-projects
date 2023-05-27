import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useEffect, useState } from "react"

const Login = () => {
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000))
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false)
      })
    }
  }, [isLoading])

  const handleClick = () => setLoading(true)

  return (
    <>
      <h3 className="mb-5">Beyaz Eşya Bayii Otomasyon Yönetim Paneli</h3>
      <Form className="d-flex flex-column justify-content-center">
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Kullanıcı Adı</Form.Label>
          <Form.Control type="username" placeholder="Kullanıcı Adı" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Şifre</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button
          variant="primary"
          disabled={isLoading}
          onClick={!isLoading ? handleClick : null}
        >
          {isLoading ? "Yükleniyor…" : "Giriş yap 🔐"}
        </Button>
      </Form>
    </>
  )
}

export default Login
