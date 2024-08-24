import React, { useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  dateofbirth: Yup.string().required("Date of Birth is required"),
  streetaddress: Yup.string().required("Street Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

function Register() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    dateofbirth: "",
    streetaddress: "",
    city: "",
    state: "",
    username: "",
    password: "",
  });

  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const apiUrl = "http://localhost:8080/";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext1 = (event) => {
    event.preventDefault();
    try {
      validationSchema.validateSyncAt("fullname", form);
      validationSchema.validateSyncAt("email", form);
      validationSchema.validateSyncAt("dateofbirth", form);
      setStep(1);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleNext2 = (event) => {
    event.preventDefault();
    try {
      validationSchema.validateSyncAt("streetaddress", form);
      validationSchema.validateSyncAt("city", form);
      validationSchema.validateSyncAt("state", form);
      setStep(2);
    } catch (error) {
      alert(error.message);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const handleResponse = (response) => {
    console.log("Response received:", response);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      validationSchema.validateSyncAt("username", form);
      validationSchema.validateSyncAt("password", form);

      const response = await axios.post(apiUrl + "register", form);
      handleResponse(response);
      alert("Registration successful! Redirecting to login...");
      setForm({
        fullname: "",
        email: "",
        dateofbirth: "",
        streetaddress: "",
        city: "",
        state: "",
        username: "",
        password: "",
      });
      navigate("/login");
    } catch (error) {
      if (error.name === "ValidationError") {
        alert(error.message);
      } else {
        console.error("Registration Failed due to:", error);
        alert("Error: " + error.message);
      }
    }
  };

  // eslint-disable-next-line no-unused-vars
  const unusedResponse = "example response";

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-indigo-600">
      <h1 className="text-4xl text-white mb-6 mt-4">
        TaskMaster: Your Ultimate Online Task List
      </h1>
      <div className="w-96 px-6 py-1 shadow-lg bg-white rounded-md">
        <h1 className="text-2xl text-center mt-3 text-gray-700">Register</h1>
        <div className="w-15 h-1/8 mt-3 mb-2 bg-gray-700 border"></div>
        <form onSubmit={handleSubmit}>
          {step === 0 && (
            <div className="mb-4">
              <h1 className="text-lg text-center mt-3 text-gray-700">
                Personal Information
              </h1>
              <div className="mb-2">
                <label
                  htmlFor="fullname"
                  className="block text-base mt-3 text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  value={form.fullname}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full text-base mt-1 mb-3 p-2 focus:outline-none focus:ring-0 focus:border-gray-600"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block text-base mt-2 text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full text-base mt-1 mb-3 p-2 focus:outline-none focus:ring-0 focus:border-gray-600"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="dateofbirth"
                  className="block text-base mt-2 text-gray-700"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dateofbirth"
                  value={form.dateofbirth}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full text-base mt-1 mb-3 p-2 focus:outline-none focus:ring-0 focus:border-gray-600"
                  required
                />
              </div>
              <button
                type="button"
                onClick={handleNext1}
                className="w-full bg-blue-500 text-white rounded p-2 mt-2 mb-2"
              >
                Next
              </button>
            </div>
          )}
          {step === 1 && (
            <div className="mb-4">
              <h1 className="text-lg text-center mt-3 text-gray-700">
                Address Information
              </h1>
              <div className="mb-2">
                <label
                  htmlFor="streetaddress"
                  className="block text-base mt-3 text-gray-700"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  name="streetaddress"
                  value={form.streetaddress}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full text-base mt-1 mb-3 p-2 focus:outline-none focus:ring-0 focus:border-gray-600"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="city"
                  className="block text-base mt-2 text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full text-base mt-1 mb-3 p-2 focus:outline-none focus:ring-0 focus:border-gray-600"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="state"
                  className="block text-base mt-2 text-gray-700"
                >
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full text-base mt-1 mb-3 p-2 focus:outline-none focus:ring-0 focus:border-gray-600"
                  required
                />
              </div>
              <button
                type="button"
                onClick={handleNext2}
                className="w-full bg-blue-500 text-white rounded p-2 mt-2 mb-2"
              >
                Next
              </button>
            </div>
          )}
          {step === 2 && (
            <div className="mb-4">
              <h1 className="text-lg text-center mt-3 text-gray-700">
                Account Information
              </h1>
              <div className="mb-2">
                <label
                  htmlFor="username"
                  className="block text-base mt-3 text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full text-base mt-1 mb-1 p-2 focus:outline-none focus:ring-0 focus:border-gray-600"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-base mt-2 text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full text-base mt-1 mb-2 p-2 focus:outline-none focus:ring-0 focus:border-gray-600"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded p-2 mt-2"
              >
                Submit
              </button>
            </div>
          )}
        </form>
        <div className="text-center mb-6">
          <p className="text-gray-700">
            Have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
