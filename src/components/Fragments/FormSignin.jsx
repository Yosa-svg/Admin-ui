import React, { useState } from "react";
import LabeledInput from "../Elements/Labeleninput";
import CheckBox from "../Elements/CheckBox";
import Button from "../Elements/Button";
import Icon from "../Elements/Icon";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

function FormSignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {/* form start */}
      <div className="mt-10">
        <form action="">
          {/* Email field with icon */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-02">
                <Icon icon={FiMail} size={18} />
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

          {/* Password field with icon + show/hide toggle */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
              Password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-02">
                <Icon icon={FiLock} size={18} />
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
                <Icon icon={showPassword ? FiEyeOff : FiEye} size={18} />
              </button>
            </div>
          </div>

          <div className="mb-5">
            <CheckBox
              label="Keep me signed in"
              id="status"
              type="checkbox"
              name="status"
            />
          </div>

          <Button>Login</Button>
        </form>
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
            <Icon icon={FcGoogle} size={22} />
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
