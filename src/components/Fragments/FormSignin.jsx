import React from "react";
import LabeledInput from "../Elements/Labeleninput";
import CheckBox from "../Elements/CheckBox";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Email tidak valid").required("Email wajib diisi"),
  password: Yup.string().required("Password wajib diisi"),
});

function FormSignIn(props) {
  const { onSubmit } = props;

  return (
    <>
      {/* form start */}
      <div className="mt-10">
        <Formik
          initialValues={{
            email: "",
            password: "",
            status: false,
          }}
          validationSchema={SignInSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await onSubmit(values.email, values.password);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
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
                      placeholder="●●●●●●●●●●●●●●"
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
              <div className="mb-3">
                <Field name="status">
                  {({ field }) => (
                    <CheckBox
                      {...field}
                      id="status"
                      type="checkbox"
                      checked={field.value}
                      label="Keep me signed in"
                    />
                  )}
                </Field>
              </div>

              {/* BUTTON */}
              <Button>{isSubmitting ? "Loading..." : "Login"}</Button>
            </Form>
          )}
        </Formik>
      </div>
      {/* form end */}

      {/* divider */}
      <div className="my-8 px-7 flex flex-col justify-center items-center">
        <div className="border border-gray-05 w-full"></div>
        <div className="px-2 bg-special-mainBg absolute text-xs text-gray-02">or sign in with</div>
      </div>

      {/* sign in with google - using react-icons FcGoogle */}
      <div className="mb-8">
        <Button type="button" variant="secondary">
          <span className="flex items-center justify-center gap-2">
            <FcGoogle size={22} className="animate-bounce" />
            Continue with Google
          </span>
        </Button>
      </div>

      {/* link */}
      <div className="flex justify-center">
        <Link to="/register" className="text-primary text-sm font-bold">
          Create an account
        </Link>
      </div>
    </>
  );
}

export default FormSignIn;
