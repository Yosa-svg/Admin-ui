import React from 'react'
import AuthLayout from '../components/Layouts/AuthLayout';
import FormSignin from '../components/Fragments/FormSignin';

function Signin() {
    return (
        <AuthLayout>
            <FormSignin />
        </AuthLayout>
    )
}

export default Signin