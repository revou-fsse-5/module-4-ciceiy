import React, { useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const apiUrl = "http://localhost:8080/";

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const email = event.target.email.value;
      const password = event.target.password.value;

      await validationSchema.validate({ email, password });

      const response = await axios.post(apiUrl + "login", {
        email,
        password,
      });

      const { user, accessToken } = response.data;
      console.log({ user });

      if (!user) {
        alert("Email tidak ditemukan!");
      } else {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem(
          "accessToken",
          accessToken || "fakeAccessTokenForDemo"
        );

        navigate("/categories");
      }
    } catch (error) {
      if (error.name === "ValidationError") {
        alert(error.message);
      } else {
        console.error("Login gagal karena:", error);
        alert("Error: " + error.message);
      }
    }
  };

  // eslint-disable-next-line no-unused-vars
  const validate = () => {
    let result = true;
    if (!email) {
      result = false;
      alert("Please enter email");
    }
    if (!password) {
      result = false;
      alert("Please enter password");
    }
    return result;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-indigo-600">
      <h1 className="text-4xl text-white mb-6 mt-4">
        TaskMaster: Your Ultimate Online Task List
      </h1>
      <div className="w-96 px-6 py-2 shadow-lg bg-white rounded-md">
        <h1 className="text-2xl text-center mt-3 text-gray-700">Log in</h1>
        <div className="w-15 h-1/8 mt-3 mb-2 bg-gray-700 border"></div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-base mt-3 text-gray-700"
            >
              E-mail
            </label>
            <input
              type="text"
              name="email"
              value={email}
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
            className="w-full bg-blue-500 text-white rounded p-2 mt-1 mb-5"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-1 mb-5">
          <p className="text-gray-700">
            Don&#39;t have an account?{" "}
            <a href="/" className="text-blue-500 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
