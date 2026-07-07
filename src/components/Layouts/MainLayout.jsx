import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Elements/Logo";
import Input from "../Elements/Input";
import Icon from "../Elements/Icon";
import { ThemeContext } from "../../context/themeContext";
import { AuthContext } from "../../context/authContext";
import { logoutService } from "../../services/authService";

const menu = [
  { id: 1, name: "Overview", icon: <Icon.Overview />, link: "/" },
  { id: 2, name: "Balances", icon: <Icon.Balance />, link: "/balance" },
  { id: 3, name: "Transaction", icon: <Icon.Transaction />, link: "/transaction" },
  { id: 4, name: "Bills", icon: <Icon.Bill />, link: "/bill" },
  { id: 5, name: "Expenses", icon: <Icon.Expense />, link: "/expense" },
  { id: 6, name: "Goals", icon: <Icon.Goal />, link: "/goal" },
  { id: 7, name: "Settings", icon: <Icon.Setting />, link: "/setting" },
];

const themes = [
  { name: "theme-green", bgcolor: "bg-[#299D91]", color: "#299D91" },
  { name: "theme-blue", bgcolor: "bg-[#1E90FF]", color: "#1E90FF" },
  { name: "theme-purple", bgcolor: "bg-[#6A5ACD]", color: "#6A5ACD" },
  { name: "theme-pink", bgcolor: "bg-[#DB7093]", color: "#DB7093" },
  { name: "theme-brown", bgcolor: "bg-[#8B4513]", color: "#8B4513" },
];

function MainLayout(props) {
  const { children } = props;
  const { theme, setTheme } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logoutService();
      logout(); 
    } catch (err) {
      console.error(err);
      if (err.status === 401) {
        logout();
      }
    }
  };

  return (
    <>
      <div className={`flex min-h-screen ${theme.name}`}>

        {/* ===== ASIDE / SIDEBAR ===== */}
        <aside className="bg-defaultBlack w-28 sm:w-64 text-special-bg2 flex flex-col justify-between py-10 px-4">

          {/* Bagian atas: Logo + Navigasi */}
          <div>
            {/* Logo */}
            <div className="mb-10">
              <Logo variant="secondary" />
            </div>

            {/* Navigasi Menu — dinamis dengan map() */}
            <nav>
              {menu.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.link}
                  end={item.link === "/"}
                  className={({ isActive }) =>
                    `flex px-4 py-3 rounded-md hover:text-white hover:font-bold hover:scale-105 transition-all ${
                      isActive
                        ? "bg-primary text-white font-bold"
                        : "hover:bg-special-bg3"
                    }`
                  }
                >
                  <div className="mx-auto sm:mx-0">{item.icon}</div>
                  <div className="ms-3 hidden sm:block">{item.name}</div>
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Bagian bawah: Themes + Logout + Info User */}
          <div>

            {/* Theme Picker */}
            <div className="mb-6">
              <div className="text-special-bg2 text-sm mb-2 hidden sm:block">Themes</div>
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                {themes.map((t) => (
                  <div
                    key={t.name}
                    className={`${t.bgcolor} w-6 h-6 rounded-md cursor-pointer mb-2 ${
                      theme.name === t.name ? "ring-2 ring-white" : ""
                    }`}
                    onClick={() => setTheme(t)}
                  ></div>
                ))}
              </div>
            </div>

            {/* Logout */}
            <div
              onClick={handleLogout}
              className="flex text-primary px-4 py-3 rounded-md cursor-pointer hover:bg-special-bg3 hover:font-bold transition-all"
            >
              <div className="mx-auto sm:mx-0">
                <Icon.Logout />
              </div>
              <div className="ms-3 hidden sm:block">Logout</div>
            </div>

            {/* Pemisah */}
            <div className="border my-6 border-b-special-bg"></div>

            {/* Info User */}
            <div className="flex justify-between items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-md flex items-center justify-center text-gray-600 font-bold">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <div className="hidden sm:block">
                <div className="font-bold">{user?.name}</div>
                <div className="text-sm text-gray-500">View Profile</div>
              </div>
              <div className="hidden sm:block">
                <Icon.Detail />
              </div>
            </div>
          </div>

        </aside>
        {/* ===== END ASIDE ===== */}

        {/* ===== KANAN: Header + Content ===== */}
        <div className="bg-special-mainBg flex-1 flex flex-col">

          {/* Header */}
          <div className="border border-b border-gray-05 px-6 py-4 flex justify-between items-center bg-white">
            {/* Kiri: Username + Date */}
            <div className="flex items-center">
              <div className="font-semibold text-defaultBlack me-3">Hello {user?.name}</div>
              <div className="text-gray-02 text-sm">May 19, 2023</div>
            </div>
            {/* Kanan: Icon + Search */}
            <div className="flex items-center">
              <div className="me-3 text-primary">
                <Icon.ChevronRight />
              </div>
              <Input
                type="text"
                placeholder="Search here..."
                backgroundColor="bg-white"
                border="border-white"
              />
            </div>
          </div>

          {/* Content Utama */}
          <div className="flex-1 px-6 py-6">
            {children}
          </div>

        </div>
        {/* ===== END KANAN ===== */}

      </div>
    </>
  );
}

export default MainLayout;
