import React from "react";
import Logo from "../Elements/Logo";
import Input from "../Elements/Input";

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

            {/* Navigasi Menu */}
            <nav>
              <div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md cursor-pointer">
                <div className="mx-auto sm:mx-0">O</div>
                <div className="ms-3 hidden sm:block">Overview</div>
              </div>
              <div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md cursor-pointer">
                <div className="mx-auto sm:mx-0">B</div>
                <div className="ms-3 hidden sm:block">Balances</div>
              </div>
              <div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md cursor-pointer">
                <div className="mx-auto sm:mx-0">T</div>
                <div className="ms-3 hidden sm:block">Transactions</div>
              </div>
              <div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md cursor-pointer">
                <div className="mx-auto sm:mx-0">Bi</div>
                <div className="ms-3 hidden sm:block">Bills</div>
              </div>
              <div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md cursor-pointer">
                <div className="mx-auto sm:mx-0">E</div>
                <div className="ms-3 hidden sm:block">Expenses</div>
              </div>
              <div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md cursor-pointer">
                <div className="mx-auto sm:mx-0">G</div>
                <div className="ms-3 hidden sm:block">Goals</div>
              </div>
              <div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md cursor-pointer">
                <div className="mx-auto sm:mx-0">S</div>
                <div className="ms-3 hidden sm:block">Settings</div>
              </div>
            </nav>
          </div>

          {/* Bagian bawah: Logout + Info User */}
          <div>
            {/* Logout */}
            <div className="flex bg-special-bg3 text-white px-4 py-3 rounded-md cursor-pointer">
              <div className="mx-auto sm:mx-0">L</div>
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
              <div className="hidden sm:block">icon</div>
            </div>
          </div>

        </aside>
        {/* ===== END ASIDE ===== */}

        {/* ===== KANAN: Header + Content ===== */}
        <div className="bg-special-mainBg flex-1 flex flex-col">

          {/* Header */}
          <div className="border border-b border-gray-05 px-6 py-4 flex justify-between items-center">
            {/* Kiri: Username + Date */}
            <div className="flex items-center">
              <div className="font-semibold text-defaultBlack me-3">Hello Tanzir</div>
              <div className="text-gray-02 text-sm">May 19, 2023</div>
            </div>
            {/* Kanan: Icon + Search */}
            <div className="flex items-center">
              <div className="me-3 text-gray-02">Icon</div>
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
