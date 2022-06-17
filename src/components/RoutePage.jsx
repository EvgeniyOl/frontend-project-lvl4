import React from 'react';
import NotFoundPage from './NotFoundPage.jsx';
import LoginPage from './LoginPage.jsx';
import LogoutPage from './LogoutPage.jsx';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import Signup from './Signup.jsx';

const RoutePage = (props) => {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="logout" element={<LogoutPage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default RoutePage
