import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(handleEmailBlur);
    setEmail("");
    setPassword("");
  };

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError("Email is required");
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Email is invalid");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordBlur = () => {
    if (!password) {
      setPasswordError("Password is required");
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setPasswordError(
        "Password must contain at least 8 characters, including letters and numbers"
      );
    } else {
      setPasswordError("");
    }
  };

  return (
    <>
      <section className="bg-gray-50 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 min-h-[91vh] ">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:px-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center ">
                Login
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                // className={
                //   emailError
                //     ? "space-y-2 md:space-y-6"
                //     : "space-y-4 md:space-y-6 "
                // }
                action="#"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block ml-1 mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    id="email"
                    className={
                      emailError
                        ? "login-input border-pink-500 animate-handshake"
                        : "login-input dark:focus:border-blue-500 "
                    }
                    placeholder="name@company.com"
                    required=""
                    value={email}
                    onBlur={handleEmailBlur}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailError && (
                    <p className="mt-1 pl-2 text-pink-600 text-sm">
                      {emailError}
                    </p>
                  )}
                </div>
                <div className="m-0 p-0 mt-0">
                  <label
                    htmlFor="password"
                    className="block ml-1 mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className={
                      passwordError
                        ? "login-input border-pink-500 animate-handshake"
                        : "login-input dark:focus:border-blue-500 "
                    }
                    required=""
                    value={password || ""}
                    onBlur={handlePasswordBlur}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {passwordError && (
                    <p className="mt-1 pl-2 text-pink-600 text-sm">
                      {passwordError}
                    </p>
                  )}
                </div>
                <button type="submit" className="btn-blue mt-2 mb-1 w-full">
                  Login
                </button>

                <p className="mt-2 text-sm font-medium text-gray-500">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
