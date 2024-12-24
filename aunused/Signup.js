import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import summaryApi from "../clien-side/src/common";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (data.password === data.confirmPassword) {
    //   const dataResponse = await fetch(summaryApi.signup.url, {
    //     method: summaryApi.signup.method,
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   const dataApi = await dataResponse.json();
    //   if(dataApi.success){
    //     toast.success(dataApi.message)
    //     navigate("/login")
    //   }
    //   if(dataApi.error){
    //     toast.error(dataApi.message)
    //   }
    //   // console.log(dataApi);
    // } else {
    //   toast.error("password is not same");
    // }
  };

  return (
    <section id="login">
      <div className="flex items-center h-screen w-full">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <span className="block w-full text-xl uppercase font-bold mb-4">
            Signup
          </span>
          <form className="mb-4">
            <div className="mb-4 md:w-full">
              <label for="name" class="block text-xs mb-1">
                Enter Your Name
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="name"
                value={data.name}
                onChange={handleOnChange}
                id="email"
                placeholder="Username"
              />
            </div>
            <div className="mb-4 md:w-full">
              <label for="email" class="block text-xs mb-1">
                Email
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="email"
                name="email"
                value={data.email}
                onChange={handleOnChange}
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6 md:w-full">
              <label for="password" class="block text-xs mb-1">
                Password
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="password"
                name="password"
                onChange={handleOnChange}
                value={data.password}
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="mb-6 md:w-full">
              <label for="confirm-password" class="block text-xs mb-1">
                Confirm Password
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="password"
                name="confirmPassword"
                onChange={handleOnChange}
                value={data.confirmPassword}
                id="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
            <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-700 flex items-center justify-center text-white uppercase text-sm font-semibold px-4 py-2 rounded">
              Signup
            </button>
          </form>
          <p className="my-5">
            Already have an account?
            <Link to={"/login"} className="text-blue-700 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
