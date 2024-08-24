import axios from "axios";

const apiUrl = "http://localhost:8080/";

const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
