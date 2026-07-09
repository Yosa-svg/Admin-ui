import React, { useContext, useState } from 'react'
import AuthLayout from '../components/Layouts/AuthLayout';
import FormSignin from '../components/Fragments/FormSignin';
import { loginService } from '../services/authService';
import { AuthContext } from '../context/authContext';
import AppSnackbar from '../components/Elements/AppSnackbar';
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from '../context/themeContext';

function Signin() {
  const { login } = useContext(AuthContext);
  const { mode, toggleMode } = useContext(ThemeContext);

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
      <div className="mt-6 flex justify-center">
        <button
          onClick={toggleMode}
          title="Toggle Light/Dark Mode"
          className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full transition-colors flex items-center justify-center"
        >
          {mode === "dark" ? <MdOutlineLightMode size={24} /> : <MdOutlineDarkMode size={24} />}
        </button>
      </div>
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