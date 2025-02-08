import axios from "axios";

export const api = axios.create({
  baseURL: "https://side-schedule.onrender.com/api",
});
