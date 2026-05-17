import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignUp from "../components/Fragments/FormSignUp";

function SignUp() {
  return (
    <AuthLayout>
      <FormSignUp />
    </AuthLayout>
  );
}

export default SignUp;
