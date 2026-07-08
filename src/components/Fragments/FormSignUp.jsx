import React, { useState } from "react";
import LabeledInput from "../Elements/Labeleninput";
import CheckBox from "../Elements/CheckBox";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

function FormSignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {/* form start */}
      <div className="mt-10">
        <form action="">

          {/* Full Name field */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-02">
                <FiUser size={18} />
              </span>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="w-full pl-10 pr-4 py-3 text-sm rounded-md bg-special-mainBg border border-gray-300 text-gray-900 focus:border-primary focus:outline-none focus:ring-0 transition-colors"
              />
            </div>
          </div>

          {/* Email field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-02">
                <FiMail size={18} />
              </span>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="hello@example.com"
                className="w-full pl-10 pr-4 py-3 text-sm rounded-md bg-special-mainBg border border-gray-300 text-gray-900 focus:border-primary focus:outline-none focus:ring-0 transition-colors"
              />
            </div>
          </div>

          {/* Password field with show/hide toggle */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
              Password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-02">
                <FiLock size={18} />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="••••••••••••"
                className="w-full pl-10 pr-10 py-3 text-sm rounded-md bg-special-mainBg border border-gray-300 text-gray-900 focus:border-primary focus:outline-none focus:ring-0 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-02 hover:text-gray-01 transition-colors"
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
          </div>

          <div className="mb-5">
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
