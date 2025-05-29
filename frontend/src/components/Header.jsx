import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional icons, or use your own

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md px-4 py-3 flex justify-between items-center relative">
      {/* Logo / Title */}
      <h1 className="text-2xl font-extrabold text-indigo-700 tracking-wide">
        HEMANT<span className="text-gray-600"> PATEL</span>
      </h1>

      {/* Menu Icon for Mobile Only */}
      <button
        className="lg:hidden text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Nav Links for Desktop*/}
      <nav className="hidden lg:flex space-x-6">
        <Link to="/" className="text-gray-700 font-semibold hover:text-blue-500">
          Home
        </Link>
        <Link to="/dashboard" className="text-gray-700 font-semibold hover:text-blue-500">
          Dashboard
        </Link>
        <Link to="/aboutus" className="text-gray-700 font-semibold hover:text-blue-500">
          About Us
        </Link>
        <Link to="/contact" className="text-gray-700 font-semibold hover:text-blue-500">
          Contact Us
        </Link>
        <Link to="/login" className="text-gray-700 font-semibold hover:text-blue-500">
          Login
        </Link>
      </nav>

      {/* Nav Links for Mobile */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white font-bold shadow-lg flex flex-col items-center px-4 py-3 space-y-3 lg:hidden z-50">
          <Link to="/" className="text-gray-700 hover:text-blue-500" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-blue-500" onClick={() => setMenuOpen(false)}>
            Dashboard
          </Link>
          <Link to="/aboutus" className="text-gray-700 hover:text-blue-500" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-500" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-500" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
