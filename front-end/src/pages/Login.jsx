// pages/Login.jsx

import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ IMPORTANT
    setError("");

    // ===============================
    // 🔥 DEFAULT ADMIN LOGIN
    // ===============================
    if (formData.email === "admin" && formData.password === "123456") {
      const adminUser = {
        id: "1",
        name: "Admin",
        email: "admin",
        role: "admin",
        preferredLanguage: "en",
      };

      localStorage.setItem("user", JSON.stringify(adminUser));
      navigate("/admin");
      return;
    }

    // ===============================
    // 🔥 DEFAULT USER LOGIN (Rahul)
    // ===============================
    if (formData.email === "rahul" && formData.password === "123456") {
      const rahulUser = {
        id: "2",
        name: "Rahul",
        email: "rahul",
        role: "user",
        preferredLanguage: "hi",
      };

      localStorage.setItem("user", JSON.stringify(rahulUser));
      navigate("/");
      return;
    }

    // ===============================
    // ❌ If credentials don't match
    // ===============================
    setError("Invalid username or password");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 rounded shadow-md w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        {error && (
          <div className="bg-red-100 text-red-600 p-2 mb-4 rounded">
            {error}
          </div>
        )}

        {/* Username */}
        <input
          type="text"
          name="email"
          placeholder="Username"
          className="w-full mb-4 p-2 border rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-6 p-2 border rounded"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>

        {/* Register Link */}
        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 font-medium">
            Register
          </Link>
        </p>

        {/* Demo Login Info */}
        <div className="mt-6 text-xs text-gray-500 text-center">
          <p><strong>Admin:</strong> admin / 123456</p>
          <p><strong>User:</strong> rahul / 123456</p>
        </div>
      </form>
    </div>
  );
}
