import axios from "axios";

/**
 * Axios instance. Base URL comes from the environment so you can point it
 * at a real backend in production. For local dev the mock layer in
 * `api/courses.ts` resolves data without needing a server.
 */
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? "/api",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});
