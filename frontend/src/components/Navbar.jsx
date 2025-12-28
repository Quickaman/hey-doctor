import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);

  const [showMenu, setShowMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      {/* ---------- LEFT SECTION ---------- */}
      <div className="flex items-center gap-3">
        <img
          onClick={() => navigate("/")}
          className="w-40 sm:w-52 md:w-60 cursor-pointer translate-y-1 sm:translate-y-2"
          src={assets.logo}
          alt="Hey Doctor"
        />

        {/* Admin Login (desktop only) */}
        <a
          href={import.meta.env.VITE_ADMIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
        >
          <p className="border px-3 py-1 rounded-full border-gray-500 text-gray-600 text-xs font-medium translate-y-2 hover:bg-gray-200">
            Admin
          </p>
        </a>
      </div>

      {/* ---------- NAV LINKS (desktop) ---------- */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/"><li className="py-1">HOME</li></NavLink>
        <NavLink to="/doctors"><li className="py-1">ALL DOCTORS</li></NavLink>
        <NavLink to="/about"><li className="py-1">ABOUT</li></NavLink>
        <NavLink to="/contact"><li className="py-1">CONTACT</li></NavLink>
      </ul>

      {/* ---------- RIGHT SECTION ---------- */}
      <div className="flex items-center gap-4 relative">
        {token && userData ? (
          <div className="relative">
            {/* Profile icon (clickable on mobile, hover on desktop) */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setShowProfileMenu(prev => !prev)}
            >
              <img className="w-8 rounded-full" src={userData.image} alt="" />
              <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            </div>

            {/* Desktop dropdown (hover) */}
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden md:group-hover:block md:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p onClick={() => navigate("/my-profile")} className="hover:text-black cursor-pointer">
                  My Profile
                </p>
                <p onClick={() => navigate("/my-appointments")} className="hover:text-black cursor-pointer">
                  My Appointments
                </p>
                <p onClick={logout} className="hover:text-black cursor-pointer">
                  Logout
                </p>
              </div>
            </div>

            {/* Mobile dropdown (click) */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-stone-100 rounded shadow-md text-base font-medium text-gray-600 md:hidden z-30">
                <p
                  onClick={() => {
                    navigate("/my-profile");
                    setShowProfileMenu(false);
                  }}
                  className="px-4 py-2 hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => {
                    navigate("/my-appointments");
                    setShowProfileMenu(false);
                  }}
                  className="px-4 py-2 hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => {
                    logout();
                    setShowProfileMenu(false);
                  }}
                  className="px-4 py-2 hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create account
          </button>
        )}

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt=""
        />
      </div>

      {/* ---------- MOBILE MENU ---------- */}
      <div
        className={`${showMenu ? "fixed w-full" : "h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
      >
        <div className="flex items-center justify-between px-5 py-6">
          <img className="w-36" src={assets.logo} alt="" />
          <img
            className="w-7"
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <NavLink onClick={() => setShowMenu(false)} to="/">HOME</NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/doctors">ALL DOCTORS</NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/about">ABOUT</NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/contact">CONTACT</NavLink>

          {/* Mobile Admin */}
          <a
            href={import.meta.env.VITE_ADMIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setShowMenu(false)}
            className="mt-4"
          >
            <p className="border px-4 py-2 rounded-full border-gray-500 text-gray-600 text-base text-center">
              Admin
            </p>
          </a>

          {!token && (
            <button
              onClick={() => {
                setShowMenu(false);
                navigate("/login");
              }}
              className="mt-3 bg-primary text-white px-6 py-2 rounded-full text-base"
            >
              Create Account
            </button>
          )}

          {token && (
            <button
              onClick={() => {
                logout();
                setShowMenu(false);
              }}
              className="mt-3 border px-6 py-2 rounded-full text-base text-gray-600"
            >
              Logout
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
