import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from '../Elements/Icon'
import {
    FiHome,
    FiCreditCard,
    FiUsers,
    FiPieChart,
    FiSettings,
    FiBell,
    FiSearch,
    FiMenu,
    FiX,
    FiLogOut,
    FiChevronRight,
} from 'react-icons/fi'

const navItems = [
    { label: 'Dashboard', icon: FiHome, path: '/dashboard' },
    { label: 'Transactions', icon: FiCreditCard, path: '/transactions' },
    { label: 'Customers', icon: FiUsers, path: '/customers' },
    { label: 'Analytics', icon: FiPieChart, path: '/analytics' },
    { label: 'Settings', icon: FiSettings, path: '/settings' },
]

function DashboardLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const location = useLocation()

    return (
        <div className="min-h-screen bg-special-mainBg flex">

            {/* Sidebar overlay (mobile) */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-40 z-20 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed top-0 left-0 h-full w-64 bg-white z-30 flex flex-col shadow-lg
                    transform transition-transform duration-300
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                    md:translate-x-0 md:relative md:shadow-none
                `}
            >
                {/* Logo */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-05">
                    <div className="font-poppins tracking-wide text-primary text-xl">
                        <span className="font-bold">FINE</span>bank<span className="font-bold">.IO</span>
                    </div>
                    <button
                        className="md:hidden text-gray-02 hover:text-gray-01"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <Icon icon={FiX} size={20} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 py-6 overflow-y-auto">
                    <p className="text-xs text-gray-03 font-medium uppercase tracking-widest mb-3 px-2">Menu</p>
                    <ul className="space-y-1">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path
                            return (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                                            ${isActive
                                                ? 'bg-primary text-white'
                                                : 'text-gray-01 hover:bg-gray-06 hover:text-defaultBlack'
                                            }`}
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <Icon icon={item.icon} size={18} />
                                        {item.label}
                                        {isActive && (
                                            <span className="ml-auto">
                                                <Icon icon={FiChevronRight} size={16} />
                                            </span>
                                        )}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                {/* Logout */}
                <div className="px-4 py-4 border-t border-gray-05">
                    <Link
                        to="/login"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-special-red hover:bg-red-50 transition-colors"
                    >
                        <Icon icon={FiLogOut} size={18} />
                        Logout
                    </Link>
                </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col min-w-0">

                {/* Topbar */}
                <header className="bg-white border-b border-gray-05 px-6 py-4 flex items-center gap-4 sticky top-0 z-10">
                    {/* Hamburger (mobile) */}
                    <button
                        className="md:hidden text-gray-02 hover:text-defaultBlack"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Icon icon={FiMenu} size={22} />
                    </button>

                    {/* Search */}
                    <div className="flex-1 max-w-md relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-03">
                            <Icon icon={FiSearch} size={16} />
                        </span>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-9 pr-4 py-2 text-sm rounded-lg bg-special-mainBg border border-gray-05 focus:border-primary focus:outline-none transition-colors"
                        />
                    </div>

                    {/* Right actions */}
                    <div className="flex items-center gap-3 ml-auto">
                        {/* Notification bell */}
                        <button className="relative p-2 rounded-lg hover:bg-gray-06 text-gray-02 hover:text-defaultBlack transition-colors">
                            <Icon icon={FiBell} size={20} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-special-red rounded-full"></span>
                        </button>

                        {/* Avatar */}
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">
                                A
                            </div>
                            <span className="hidden sm:block text-sm font-medium text-defaultBlack">Admin</span>
                        </div>
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 p-6">
                    {children}
                </main>

            </div>
        </div>
    )
}

export default DashboardLayout
