import React from 'react';
import {
  Form, Button, Card, Image, Row, Col,
} from 'react-bootstrap';
import imgLogin from './../assets/chat.png';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

const LoginPage = (props) => {

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
  })

  return (
    <Card style={{ width: '40rem' }} className="position-absolute top-50 start-50 translate-middle">
      <Card.Header as="h2">Войти</Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <Image src={imgLogin} />
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Login</Form.Label>
                <Form.Control
                  name="username"
                  type="text"
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                enter
              </Button>
            </Form>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="text-center">
        <Link to={'/signup'} className="text-decoration-none">Регистрация</Link>
      </Card.Footer>
    </Card>
  )
}

export default LoginPage
