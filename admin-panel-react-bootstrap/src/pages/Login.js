import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Kullanıcı Adı</Form.Label>
        <Form.Control type="username" placeholder="Kullanıcı Adı" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Şifre</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Giriş
      </Button>
    </Form>
  );
};

export default Login;
