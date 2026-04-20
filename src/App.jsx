import "./App.css";

function App() {
  return (
    <main className="min-h-screen bg-special-mainBg flex justify-center items-center p-4">
      {/* container start */}
      <div className="w-full max-w-[420px]">
        {/* logo start */}
        <div className="flex justify-center font-poppins tracking-wide text-primary text-4xl mb-12">
          <span className="font-bold">FINE</span>
          bank
          <span className="font-bold">.IO</span>
        </div>
        {/* logo end */}

        {/* form start */}
        <div>
          <form action="" className="space-y-5">
            {/* Email Field Wrapper */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 text-sm rounded-md bg-special-mainBg border border-gray-300 text-gray-900 focus:border-black focus:outline-none focus:ring-0 transition-colors"
                placeholder="hello@example.com"
                name="email"
                id="email"
              />
            </div>

            {/* Password Field Wrapper */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 text-sm rounded-md bg-special-mainBg border border-gray-300 text-gray-900 focus:border-black focus:outline-none focus:ring-0 transition-colors"
                placeholder="************"
                name="password"
                id="password"
              />
            </div>

            {/* Checkbox Field Wrapper */}
            <div className="flex items-center gap-2 pt-1 mb-3">
              <input
                type="checkbox"
                className="w-4 h-4 accent-primary border-gray-300 rounded cursor-pointer"
                name="status"
                id="status"
              />
              <label htmlFor="status" className="text-sm text-gray-500 cursor-pointer ml-6">
                Keep me signed in
              </label>
            </div>

            {/* Login Button */}
            <button
              className="w-full h-12 py-3 mt-2 text-sm font-medium text-white rounded-md bg-primary hover:opacity-90 transition-opacity"
              type="submit"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="my-9 px-7 flex flex-col justify-center items-center text-xs text-gray-400 relative">
            <div className="border border-gray-200 w-full"></div>
            <span className="px-2 bg-special-mainBg absolute">or sign in with</span>
          </div>

          {/* Google Login Button Wrapper */}
          <div className="mb-8">
            <button
              type="button"
              className="flex items-center justify-center h-12 w-full gap-3 py-3 text-sm font-medium text-gray-600 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
            >
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="800px"
                height="800px"
                viewBox="-0.5 0 48 48"
                version="1.1"
              >
                <title>Google-color</title>
                <desc>Created with Sketch.</desc>
                <defs />
                <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Color-" transform="translate(-401.000000, -860.000000)">
                    <g id="Google" transform="translate(401.000000, 860.000000)">
                      <path
                        d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.014 10.5390909,19.6472727 L2.65795455,13.6218182 C1.05590909,16.7304 0,20.2592 0,24 C0,27.7408 1.05590909,31.2696 2.65795455,34.3781818 L10.5390909,28.3527273 C10.0804318,26.986 9.82727273,25.5242667 9.82727273,24"
                        id="Fill-1"
                        fill="#FBBC05"
                      />
                      <path
                        d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.39090909 C34.7113636,2.432 29.5022727,0 23.7136364,0 C14.4227273,0 6.44409091,5.36106667 2.65795455,13.6218182 L10.5390909,19.6472727 C12.3068182,14.072 17.5409091,10.1333333 23.7136364,10.1333333"
                        id="Fill-2"
                        fill="#EB4335"
                      />
                      <path
                        d="M23.7136364,37.8666667 C17.5409091,37.8666667 12.3068182,33.928 10.5390909,28.3527273 L2.65795455,34.3781818 C6.44409091,42.6389333 14.4227273,48 23.7136364,48 C29.1681818,48 34.3056818,46.104 38.2579545,43.2392727 L31.0261364,37.632 C28.9909091,39.0026667 26.4670455,37.8666667 23.7136364,37.8666667"
                        id="Fill-3"
                        fill="#34A853"
                      />
                      <path
                        d="M46.1454545,24 C46.1454545,22.1333333 45.9333333,20.3562667 45.7212121,18.7636364 L23.7136364,18.7636364 L23.7136364,28.3527273 L36.7272727,28.3527273 C36.2193182,31.0656 34.5081818,33.1506667 32.3659091,34.3781818 L38.2579545,43.2392727 C42.7931818,39.664 46.1454545,34.2213333 46.1454545,24"
                        id="Fill-Fill-4"
                        fill="#4285F4"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              Continue with Google
            </button>
          </div>

          {/* Create Account Link */}
          <div className="mt-8 text-center flex justify-center">
            <a
              href="#"
              className="text-sm font-bold text-primary hover:underline"
            >
              Create an account
            </a>
          </div>
        </div>
        {/* form end */}
      </div>
      {/* container end */}
    </main>
  );
}

export default App;