import axios from "axios";

const apiUrl = "https://module-4-ciceiy.netlify.app/";

const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
