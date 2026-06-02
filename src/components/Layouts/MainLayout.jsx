import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Elements/Logo";
import Input from "../Elements/Input";
import Icon from "../Elements/Icon";

const menu = [
  { id: 1, name: "Overview", icon: <Icon.Overview />, link: "/" },
  { id: 2, name: "Balances", icon: <Icon.Balance />, link: "/balance" },
  { id: 3, name: "Transaction", icon: <Icon.Transaction />, link: "/transaction" },
  { id: 4, name: "Bills", icon: <Icon.Bill />, link: "/bill" },
  { id: 5, name: "Expenses", icon: <Icon.Expense />, link: "/expense" },
  { id: 6, name: "Goals", icon: <Icon.Goal />, link: "/goal" },
  { id: 7, name: "Settings", icon: <Icon.Setting />, link: "/setting" },
];

function MainLayout(props) {
  const { children } = props;

  return (
    <>
      <div className="flex min-h-screen">

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

          {/* Bagian bawah: Logout + Info User */}
          <div>
            {/* Logout */}
            <div className="flex bg-special-bg3 text-white px-4 py-3 rounded-md cursor-pointer hover:bg-primary hover:font-bold transition-all">
              <div className="mx-auto sm:mx-0">
                <Icon.Logout />
              </div>
              <div className="ms-3 hidden sm:block">Logout</div>
            </div>

            {/* Pemisah */}
            <div className="border my-10 border-b-special-bg"></div>

            {/* Info User */}
            <div className="flex justify-between items-center">
              <div>Avatar</div>
              <div className="hidden sm:block">
                Username
                <br />
                View Profile
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
              <div className="font-semibold text-defaultBlack me-3">Hello Tanzir</div>
              <div className="text-gray-02 text-sm">May 19, 2023</div>
            </div>
            {/* Kanan: Icon + Search */}
            <div className="flex items-center">
              <div className="me-3 text-gray-02">
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
