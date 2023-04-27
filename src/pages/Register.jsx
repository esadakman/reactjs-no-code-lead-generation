import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"; 
const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleRegister = () => {
    console.table(name, surname, email, password, password2); 
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 ">
        <div
          className="flex flex-col items-center justify-center px-6 py-8 mx-auto   lg:py-0"
          style={{ height: "91vh" }}
        >
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white ">
                Create and account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div className="flex">
                  <div className="w-1/2">
                    <label
                      htmlFor="Name"
                      className="block   mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="Name"
                      name="Name"
                      id="Name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                      block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                      focus:ring-primary-600 focus:border-primary-600 
                      dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0 transition-all
                      "
                      placeholder="Name"
                      required=""
                      value={name }
                      onChange={(e)=>setName(e.target.value)}
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="Surname"
                      className="block  mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Surname
                    </label>
                    <input
                      type="Surname"
                      name="Surname"
                      id="Surname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0 transition-all"
                      placeholder="Surname"
                      required=""
                      value={surname }
                      onChange={(e)=>setSurname(e.target.value)}


                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block   mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0 transition-all"
                    placeholder="name@company.com"
                    required=""
                    value={email }
                    onChange={(e)=>setEmail(e.target.value)}


                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block   mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0 transition-all"
                    required=""
                    value={password }
                    onChange={(e)=>setPassword(e.target.value)}

                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block   mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="confirm-password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0 transition-all"
                    required=""
                    value={password2 }
                    onChange={(e)=>setPassword2(e.target.value)}

                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-primary-800 "
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
