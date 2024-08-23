import axios from "axios";

const apiUrl = "https://66c8bfe0d921d3da127a806f--module-4-ciceiy.netlify.app";

const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
