// services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const loginUser = (data) => API.post("/auth/login", data);
export const sendMessage = (data) => API.post("/chat/send", data);
export const getMessages = (chatId) => API.get(`/chat/${chatId}`);
