import React from 'react'
import Logo from '../Elements/Logo'

function AuthLayout(props) {
    const { children, title, type } = props;

    return (
        <>
            <main className="min-h-screen bg-special-mainBg flex">

                {/* Left panel - hidden on mobile, visible on md+ */}
                <div className="hidden md:flex md:w-1/2 bg-primary flex-col justify-between p-12 relative overflow-hidden">

                    {/* decorative circles */}
                    <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white opacity-5"></div>
                    <div className="absolute top-1/2 -right-16 w-56 h-56 rounded-full bg-white opacity-5"></div>
                    <div className="absolute -bottom-16 left-1/3 w-48 h-48 rounded-full bg-white opacity-5"></div>

                    {/* Logo top left */}
                    <div className="flex font-poppins tracking-wide text-white text-3xl font-bold relative z-10">
                        <span className="font-bold">FINE</span>bank<span className="font-bold">.IO</span>
                    </div>

                    {/* Center content */}
                    <div className="relative z-10">
                        <h1 className="text-white text-4xl font-bold leading-tight mb-4">
                            {type === 'register'
                                ? 'Start your journey with us today'
                                : 'Welcome back to FINEbank.IO'}
                        </h1>
                        <p className="text-white opacity-80 text-base leading-relaxed">
                            {type === 'register'
                                ? 'Create your account and manage your finances smarter, faster, and more securely than ever before.'
                                : 'Sign in to access your dashboard, manage transactions, and stay in control of your finances.'}
                        </p>
                    </div>

                    {/* Bottom stats */}
                    <div className="flex gap-8 relative z-10">
                        <div>
                            <p className="text-white text-2xl font-bold">50K+</p>
                            <p className="text-white opacity-70 text-sm">Active Users</p>
                        </div>
                        <div>
                            <p className="text-white text-2xl font-bold">99.9%</p>
                            <p className="text-white opacity-70 text-sm">Uptime</p>
                        </div>
                        <div>
                            <p className="text-white text-2xl font-bold">$2B+</p>
                            <p className="text-white opacity-70 text-sm">Managed</p>
                        </div>
                    </div>
                </div>

                {/* Right panel - form area */}
                <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-12">
                    <div className="w-full max-w-sm">

                        {/* Logo - only visible on mobile */}
                        <div className="md:hidden">
                            <Logo />
                        </div>

                        {/* Page title */}
                        {title && (
                            <div className="mb-2">
                                <h2 className="text-2xl font-bold text-defaultBlack">{title}</h2>
                            </div>
                        )}

                        {/* form children */}
                        {children}

                    </div>
                </div>

            </main>
        </>
    );
}

export default AuthLayout