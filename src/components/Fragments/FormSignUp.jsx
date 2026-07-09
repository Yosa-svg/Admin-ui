import React from "react";
import LabeledInput from "../Elements/Labeleninput";
import CheckBox from "../Elements/CheckBox";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required("Nama wajib diisi"),
  email: Yup.string().email("Email tidak valid").required("Email wajib diisi"),
  password: Yup.string().min(8, "Password minimal 8 karakter").required("Password wajib diisi"),
});

function FormSignUp(props) {
  const { onSubmit } = props;

  return (
    <>
      {/* form start */}
      <div className="mt-10">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            agree: false,
          }}
          validationSchema={SignUpSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await onSubmit(values.name, values.email, values.password);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* NAME */}
              <div className="mb-6">
                <Field name="name">
                  {({ field }) => (
                    <LabeledInput
                      {...field}
                      id="name"
                      type="text"
                      label="Full Name"
                      placeholder="John Doe"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />  
              </div>

              {/* EMAIL */}
              <div className="mb-6">
                <Field name="email">
                  {({ field }) => (
                    <LabeledInput
                      {...field}
                      id="email"
                      type="email"
                      label="Email Address"
                      placeholder="hello@example.com"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />  
              </div>

              {/* PASSWORD */}
              <div className="mb-6">
                <Field name="password">
                  {({ field }) => (
                    <LabeledInput
                      {...field}
                      id="password"
                      type="password"
                      label="Password"
                      placeholder="••••••••••••"
                    />
                  )}
                </Field> 
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                /> 
              </div>

              {/* CHECKBOX */}
              <div className="mb-5">
                <Field name="agree">
                  {({ field }) => (
                    <CheckBox
                      {...field}
                      id="agree"
                      type="checkbox"
                      checked={field.value}
                      label="I agree to the terms and conditions"
                    />
                  )}
                </Field>
              </div>

              {/* BUTTON */}
              <Button>{isSubmitting ? "Loading.." : "Register"}</Button>
            </Form>
          )}
        </Formik>
      </div>
      {/* form end */}

      {/* link */}
      <div className="flex justify-center text-sm text-gray-01 mt-6">
        Already have an account?&nbsp;
        <Link to="/login" className="text-primary font-bold">
          Sign In Here
        </Link>
      </div>
    </>
  );
}

export default FormSignUp;
