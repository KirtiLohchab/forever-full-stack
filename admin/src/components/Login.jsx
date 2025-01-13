import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  w-full">
      <div className="w-96 max-w-md py-6 px-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className=" text-sm font-medium text-gray-700 mb-2">
              Email Address
            </p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full px-3 py-2 border -2 border-gray-300 outline-none rounded-md "
              type="email"
              placeholder="Enter your mail"
              required
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className=" text-sm font-medium text-gray-700 mb-2">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full px-3 py-2 border -2 border-gray-300 outline-none rounded-md "
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            className="bg-slate-800 text-white px-4 py-2 rounded-md mt-2 w-full"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
