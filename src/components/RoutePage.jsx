import React from 'react';
import NotFoundPage from './NotFoundPage.jsx';
import LoginPage from './LoginPage.jsx';
import LogoutPage from './LogoutPage.jsx';
import { Route, Routes } from 'react-router-dom';

const RoutePage = (props) => {
  return (
    <Routes>
      <Route path='/' >
        <Route path="login" element={<LoginPage />} />
        <Route path="logout" element={<LogoutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default RoutePage
