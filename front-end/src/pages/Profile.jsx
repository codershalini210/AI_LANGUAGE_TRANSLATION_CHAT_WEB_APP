// pages/Profile.jsx

import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState(user?.name || "");
  const [language, setLanguage] = useState(user?.preferredLanguage || "en");
  const [message, setMessage] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();

    // Normally here you call backend API to update profile
    const updatedUser = {
      ...user,
      name,
      preferredLanguage: language,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    setMessage("Profile updated successfully!");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">
          My Profile
        </h2>

        {message && (
          <div className="bg-green-100 text-green-700 p-2 mb-4 rounded">
            {message}
          </div>
        )}

        <form onSubmit={handleUpdate}>
          {/* Name */}
          <label className="block mb-2 font-medium">Full Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Email (Read Only) */}
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded mb-4 bg-gray-100"
            value={user?.email}
            disabled
          />

          {/* Language Preference */}
          <label className="block mb-2 font-medium">
            Preferred Language
          </label>
          <select
            className="w-full p-2 border rounded mb-6"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
          </select>

          {/* Update Button */}
          <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
            Update Profile
          </button>
        </form>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="w-full mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>

      </div>
    </div>
  );
}
