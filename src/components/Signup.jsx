import React from "react";
import {
  Form, Button, Card, Image, Row, Col,
} from 'react-bootstrap';
import signupImg from "./../assets/auth.png";
import { useFormik } from "formik";
import * as Yup from 'yup';

function Signup() {

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      password_confirmation: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, 'errors.min3')
        .max(20, 'errors.max20')
        .required('errors.required'),
      password: Yup.string()
        .min(6, 'errors.min6')
        .required('errors.required'),
      password_confirmation: Yup.string()
        .required('errors.required')
        .oneOf([Yup.ref('password'), null], 'errors.confirmation'),
    })
  })

  return (
    <Card style={{ width: '40rem' }} className="position-absolute top-50 start-50 translate-middle">
      <Card.Header as="h2">Регистрация</Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <Image src={signupImg} />
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Имя Пользователя</Form.Label>
                <Form.Control
                  name="username"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password_confirmation">
                <Form.Label>Подтвердите пароль</Form.Label>
                <Form.Control
                  name="password_confirmation"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password_confirmation}
                />
              </Form.Group>

              <Button variant="primary" type="submit">Зарегистрироваться</Button>
            </Form>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Signup;
