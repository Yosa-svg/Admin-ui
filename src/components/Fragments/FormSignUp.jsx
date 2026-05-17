import React from "react";
import LabeledInput from "../Elements/Labeleninput";
import CheckBox from "../Elements/CheckBox";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

function FormSignUp() {
  return (
    <>
      {/* form start */}
      <div className="mt-16">
        <form action="">
          <div className="mb-6">
            <LabeledInput
              label="Full Name"
              id="name"
              type="text"
              placeholder="John Doe"
              name="name"
            />
          </div>
          <div className="mb-6">
            <LabeledInput
              label="Email Address"
              id="email"
              type="email"
              placeholder="hello@example.com"
              name="email"
            />
          </div>
          <div className="mb-6">
            <LabeledInput
              label="Password"
              id="password"
              type="password"
              placeholder="••••••••••••"
              name="password"
            />
          </div>
          <div className="mb-3">
            <CheckBox
              label="I agree to the terms and conditions"
              id="agree"
              type="checkbox"
              name="agree"
            />
          </div>
          <Button>Register</Button>
        </form>
      </div>
      {/* form end */}

      {/* link start */}
      <div className="flex justify-center text-sm text-gray-01 mt-6">
        Already have an account?&nbsp;
        <Link to="/login" className="text-primary font-bold">
          Sign In Here
        </Link>
      </div>
      {/* link end */}
    </>
  );
}

export default FormSignUp;
