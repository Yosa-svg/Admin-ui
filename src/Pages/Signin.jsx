import React, { useContext } from 'react'
import AuthLayout from '../components/Layouts/AuthLayout';
import FormSignin from '../components/Fragments/FormSignin';
import { loginService } from '../services/authService';
import { AuthContext } from '../context/authContext';

function Signin() {
  const { login } = useContext(AuthContext);

  const handleLogin = async (email, password) => {
    try {
      const { refreshToken } = await loginService(email, password);
      login(refreshToken); 
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