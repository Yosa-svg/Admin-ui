import React from 'react'
import AuthLayout from '../components/Layouts/AuthLayout';
import FormSignin from '../components/Fragments/FormSignin';
import { loginService } from '../services/authService';

function Signin() {
  const handleLogin = async (email, password) => {
    try {
      const { refreshToken } = await loginService(email, password);
      console.log(refreshToken); 
    } catch (err) {
      console.error(err.msg);
    }
  };

  return (
    <AuthLayout title="Sign in to your account" type="login">
      <FormSignin onSubmit={handleLogin} />
    </AuthLayout>
  )
}

export default Signin