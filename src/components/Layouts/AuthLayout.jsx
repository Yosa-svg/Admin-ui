import React, { useContext } from 'react'
import Logo from '../Elements/Logo'
import { ThemeContext } from '../../context/themeContext'

function AuthLayout(props) {
    const { children, title } = props;
    const { theme, mode } = useContext(ThemeContext);

    return (
        <div className={`${theme.name} ${mode === "dark" ? "dark" : ""}`}>
            <main className="min-h-screen bg-white dark:bg-gray-900 flex justify-center items-center p-6 md:p-12">
                <div className="w-full max-w-sm">

                    {/* Logo */}
                    <div className="mb-8 flex justify-center">
                        <Logo />
                    </div>

                    {/* Page title */}
                    {title && (
                        <div className="mb-6 text-center">
                            <h2 className="text-2xl font-bold text-defaultBlack dark:text-white">{title}</h2>
                        </div>
                    )}

                    {/* form children */}
                    {children}

                </div>
            </main>
        </div>
    );
}

export default AuthLayout;