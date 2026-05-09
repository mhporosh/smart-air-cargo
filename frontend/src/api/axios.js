import axios from "axios";

function normalizeApiBaseUrl(rawUrl) {
  const cleaned = (rawUrl || "").trim().replace(/\/+$/, "");
  if (!cleaned) {
    return "http://localhost:8000/api";
  }
  return cleaned.endsWith("/api") ? cleaned : `${cleaned}/api`;
}

const API_BASE_URL = normalizeApiBaseUrl(import.meta.env.VITE_API_URL);

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

export default api;
