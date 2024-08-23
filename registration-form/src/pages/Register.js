import React, { useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      await validationSchema.validate({ username, password });

      await axios.post("http://localhost:3001/users", { username, password });

      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      if (err.name === "ValidationError") {
        alert(err.message);
      } else {
        console.error("Registration Failed due to:", err);
        alert("Error: " + err.message);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-indigo-600">
      <div className="w-96 px-6 py-2 shadow-lg bg-white rounded-md">
        <h1 className="text-2xl text-center mt-3 text-gray-700">Register</h1>
        <div className="w-15 h-1/2 mt-3 mb-2 bg-gray-700 border"></div>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-base mt-3 text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full text-base mt-1 mb-3 p-2 focus:outline-none focus:ring-0 focus:border-gray-600"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-base mt-2 text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full text-base mt-1 mb-3 p-2 focus:outline-none focus:ring-0 focus:border-gray-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded p-2 mt-1 mb-2"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
