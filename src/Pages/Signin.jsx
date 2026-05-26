import React from 'react'
import AuthLayout from '../components/Layouts/AuthLayout';
import FormSignin from '../components/Fragments/FormSignin';

function Signin() {
    return (
        <AuthLayout title="Sign in to your account" type="login">
            <FormSignin />
        </AuthLayout>
    )
}

export default Signin