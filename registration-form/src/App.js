import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
function App() {
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [step, setStep] = useState(0);

  const handleNext1 = (event) => {
    event.preventDefault();
    try {
      validationSchema.validateSyncAt("fullname", form);
      validationSchema.validateSyncAt("email", form);
      validationSchema.validateSyncAt("dateofbirth", form);
      setStep(1);
    } catch (err) {
      alert(err.message);
    }
  };
  const handleNext2 = (event) => {
    event.preventDefault();
    try {
      validationSchema.validateSyncAt("streetaddress", form);
      validationSchema.validateSyncAt("city", form);
      validationSchema.validateSyncAt("state", form);
      setStep(2);
    } catch (err) {
      alert(err.message);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      validationSchema.validateSyncAt("username", form);
      validationSchema.validateSyncAt("password", form);
    } catch (err) {
      alert(err.message);
      return;
    }
    alert("Form submitted successfully!");
  };

  return (
    <div class="flex justify-center items-center h-screen bg-indigo-600">
      <div class="w-96 px-6 py-2 shadow-lg bg-white rounded-md">
        <h1 class="text-2xl text-center mt-3 text-gray-700">
          Registration Form
        </h1>
        <div
          className="underline"
          class="w-15 h-1/2 mt-3 mb-2 bg-gray-700 border"
        ></div>
        <form onSubmit={handleSubmit}>
          {step === 0 && (
            <div class="mb-4">
              <h1 class="text-lg text-center mt-3 text-gray-700">
                Personal Information
              </h1>
              <div class="mb-2">
                <label for="name" class="block text-base mt-3 text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  value={form.fullname}
                  onChange={handleChange}
                  class="border border-gray-300 rounded w-full text-base mt-1 mb-3 p-2 focus:outline-none focus:ring-0 focus:border-gray-600"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="name" class="block text-base mt-2 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  class="border border-gray-300 rounded w-full text-base mt-1 mb-3 p-2 focus:outline-none focus:ring-0 focus:border-gray-600"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="name" class="block text-base mt-2 text-gray-700">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dateofbirth"
                  value={form.dateofbirth}
                  onChange={handleChange}
                  class="border border-gray-300 rounded w-full text-base mt-1 mb-3 p-2 focus:outline-none focus:ring-0 focus:border-gray-600"
                  required
                />
              </div>
              <button
                type="button"
                onClick={handleNext1}
                class="w-full bg-blue-500 text-white rounded p-2 mt-2 mb-2"
              >
                Next
              </button>
            </div>
          )}
          {step === 1 && (
            <div class="mb-4">
              <h1 class="text-lg text-center mt-3 text-gray-700">
                Address Information
              </h1>
              <div class="mb-2">
                <label for="name" class="block text-base mt-3 text-gray-700">
                  Street Address
                </label>
                <input
                  type="text"
                  name="streetaddress"
                  value={form.streetaddress}
                  onChange={handleChange}
                  class="border border-gray-300 rounded w-full text-base mt-1 mb-3 p-2 focus:outline-none focus:ring-0 focus:border-gray-600"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="name" class="block text-base mt-2 text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  class="border border-gray-300 rounded w-full text-base mt-1 mb-3 p-2 focus:outline-none focus:ring-0 focus:border-gray-600"
                  required
                />
              </div>
              <div class="mb-2">
                <label for="name" class="block text-base mt-2 text-gray-700">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  class="border border-gray-300 rounded w-full text-base mt-1 mb-3 p-2 focus:outline-none focus:ring-0 focus:border-gray-600"
                  required
                />
              </div>
              <button
                type="button"
                onClick={handleNext2}
                class="w-full bg-blue-500 text-white rounded p-2 mt-2 mb-2"
              >
                Next
              </button>
            </div>
          )}
          {step === 2 && (
            <>
              <div class="mb-4">
                <h1 class="text-lg text-center mt-3 text-gray-700">
                  Account Information
                </h1>
                <div class="mb-2">
                  <label for="name" class="block text-base mt-3 text-gray-700">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    class="border border-gray-300 rounded w-full text-base mt-1 mb-1 p-2 focus:outline-none focus:ring-0 focus:border-gray-600"
                    required
                  />
                </div>
                <div class="mb-2">
                  <label for="name" class="block text-base mt-2 text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    class="border border-gray-300 rounded w-full text-base mt-1 mb-3 p-2 focus:outline-none focus:ring-0 focus:border-gray-600"
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="w-full bg-blue-500 text-white rounded p-2 mt-1 mb-2"
                >
                  Register
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
