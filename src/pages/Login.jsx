import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth.authUser);
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(login({ email, password, navigate }));
    if (authUser) {
      navigate("/");
    }
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
      <section className="bg-white dark:bg-gray-900">
        <div className="flex justify-center min-h-[91vh]">
          <div className="flex items-center w-full max-w-xl p-8 mx-auto xl:px-12 md:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl font-semibold tracking-wider leading-tight text-gray-900 md:text-2xl dark:text-white text-center">
                Login
              </h1>
              <form
                className="space-y-6 md:space-y-6"
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
                <button
                  type="submit"
                  className="btn-blue mt-2 mb-1 w-full"
                  disabled={!!emailError || !!passwordError}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
          <div
            className="hidden bg-cover sm:block lg:w-3/5 md:w-2/5"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')",
            }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default Login;
