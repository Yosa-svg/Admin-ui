import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignUp from "../components/Fragments/FormSignUp";
import AppSnackbar from "../components/Elements/AppSnackbar";
import { registerService } from "../services/authService";

function SignUp() {
  const navigate = useNavigate();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleRegister = async (name, email, password) => {
    try {
      await registerService(name, email, password);
      setSnackbar({ open: true, message: "Register Berhasil! Mengalihkan ke Login...", severity: "success" });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setSnackbar({ open: true, message: err.msg || err.message || "Gagal Register", severity: "error" });
    }
  };

  return (
    <AuthLayout title="Create your account" type="register">
      <FormSignUp onSubmit={handleRegister} />
      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </AuthLayout>
  );
}

export default SignUp;
