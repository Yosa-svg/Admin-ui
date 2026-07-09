import React, { useContext, useState } from 'react'
import AuthLayout from '../components/Layouts/AuthLayout';
import FormSignin from '../components/Fragments/FormSignin';
import { loginService } from '../services/authService';
import { AuthContext } from '../context/authContext';
import AppSnackbar from '../components/Elements/AppSnackbar';

function Signin() {
  const { login } = useContext(AuthContext);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  }); 
  
  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await loginService(email, password);
      const tokenToUse = response.refreshToken || response.token || response.accessToken || response.data?.token || response.data?.refreshToken;
      
      if (!tokenToUse) {
        setSnackbar({ open: true, message: "Token kredensial tidak ditemukan dari server.", severity: "error" });
        return;
      }
      
      login(tokenToUse); 
    } catch (err) {
      setSnackbar({ open: true, message: err.msg || err.message || "Gagal Login", severity: "error" });
    }
  };

  return (
    <AuthLayout title="Sign in to your account" type="login">
      <FormSignin onSubmit={handleLogin} />
      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </AuthLayout>
  )
}

export default Signin