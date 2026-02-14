// components/Navbar.jsx

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center shadow-md">

      {/* Left Side - App Name */}
      <Link to="/" className="text-xl font-bold">
        🌍 AI Translate Chat
      </Link>

      {/* Right Side */}
      <div className="flex items-center space-x-6">

        {user && (
          <>
            {/* Language */}
            <span className="text-sm bg-gray-700 px-3 py-1 rounded">
              {user.preferredLanguage?.toUpperCase()}
            </span>

            {/* User Name */}
            <span className="font-medium">
              {user.name}
            </span>

            {/* Profile */}
            <Link
              to="/profile"
              className="hover:text-blue-400 transition"
            >
              Profile
            </Link>

            {/* Admin Panel (Only if admin) */}
            {user.role === "admin" && (
              <Link
                to="/admin"
                className="hover:text-yellow-400 transition"
              >
                Admin
              </Link>
            )}

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        )}

      </div>
    </nav>
  );
}
