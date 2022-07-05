import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from 'react-bootstrap';
import axios from 'axios';
import * as Yup from 'yup';
import loginImg from '../assets/chat.png';
import routes from '../utils/routes.js';
import useAuth from '../hooks/useAuth.jsx';

function LoginPage() {
  const [authFailed, setAuthFailed] = useState(false);
  const { t } = useTranslation('translation', { keyPrefix: 'loginPage' });
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required(t('errors.usernameReq')),
      password: Yup.string().required(t('errors.passwordReq')),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(routes.loginPath(), values);
        localStorage.setItem('userId', JSON.stringify(response.data));
        setAuthFailed(false);
        logIn();
        navigate(routes.chatPage());
      } catch (err) {
        if (err.isAxiosError && err.response.status === 401) {
          setAuthFailed(true);
          inputRef.current.select();
          return;
        }
        throw err;
      }
    },
  });
  return (
    <Container fluid className="h-100">
      <Row className="justify-content-center align-content-center h-100">
        <Col md="8" xxl="6">
          <Card className="shadow-sm">
            <Card.Body className="p-5 d-flex">
              <img className="rounded-circle m-5" width="250px" src={loginImg} alt="loginImg" />
              <Form className="m-5" onSubmit={formik.handleSubmit}>
                <h1 className="text-center mb-4">{t('page.enter')}</h1>
                <FloatingLabel
                  label={t('page.username')}
                  controlId="username"
                  className="mb-3"
                >
                  <Form.Control
                    name="username"
                    placeholder={t('page.username')}
                    ref={inputRef}
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    isInvalid={
                      (formik.touched.username && !!formik.errors.username)
                      || authFailed
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.username}
                  </Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel
                  label={t('page.password')}
                  controlId="password"
                  className="mb-3"
                >
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder={t('page.password')}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    isInvalid={
                      (formik.touched.password && !!formik.errors.password)
                      || authFailed
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.password ?? t('errors.authFailedPhrase')}
                  </Form.Control.Feedback>
                </FloatingLabel>
                <Button className="w-100" variant="outline-primary" type="submit">
                  {t('page.enter')}
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer>
              <div className="text-center">
                <span>{t('page.haveAcc')}</span>
                <Link to="/signup">{t('page.registration')}</Link>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default LoginPage;
