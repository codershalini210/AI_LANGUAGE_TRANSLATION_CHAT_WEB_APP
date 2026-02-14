// context/AuthContext.jsx

import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const API = axios.create({
    baseURL: "http://localhost:5000/api",
  });

  // Load user from localStorage on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  // =========================
  // LOGIN FUNCTION
  // =========================
  const login = async (email, password) => {
    try {
      const res = await API.post("/auth/login", { email, password });

      const loggedUser = res.data;

      setUser(loggedUser);
      localStorage.setItem("user", JSON.stringify(loggedUser));

      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    }
  };

  // =========================
  // REGISTER FUNCTION
  // =========================
  const register = async (userData) => {
    try {
      const res = await API.post("/auth/register", userData);

      const newUser = res.data;

      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));

      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Registration failed",
      };
    }
  };

  // =========================
  // LOGOUT FUNCTION
  // =========================
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        loading,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
