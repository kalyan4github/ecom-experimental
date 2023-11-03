"use client";

import React, { useState } from "react";
import { signUp } from "../actions/users/signUp";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const handleSubmit = async () => {
    setMessage("Signing up...");
    const message = await signUp(email, password);
    setMessage(message);
  };
  return (
    <div className="flex items-center justify-center ">
        
      <div className="flex flex-col gap-4 p-4">
      <h1 className='text-3xl block text-gray-700  font-bold'>
            Sign Up
        </h1>
        <label className="block text-gray-700 text-sm font-bold">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label className="block text-gray-700 text-sm font-bold">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign up
        </button>

        <p>{message}</p>
      </div>
    </div>
  );
};

export default SignUpForm;
