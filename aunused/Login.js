import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../clien-side/src/common";
import { toast } from "react-toastify";
import Context from "../clien-side/src/context";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const { fetchUserDetails,  fetchUserAddToCount } = useContext(Context)
  // console.log("general context", generalContext);
  // console.log(fetchUserDetails)
  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const dataRespone = await fetch(SummaryApi.signIn.url, {
      method: SummaryApi.signIn.method,
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const dataApi = await dataRespone.json()
    // console.log(dataApi);
    if(dataApi.success){
    toast.success(dataApi.message)
    navigate('/')
    fetchUserDetails()
    fetchUserAddToCount()
    }
    if(dataApi.error){
      toast.error(dataApi.message)
    }
  }
  
  return (
    <section id="login">
      <div className="flex items-center h-screen w-full">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <span className="block w-full text-xl uppercase font-bold mb-4">
            Login
          </span>
          <form className="mb-4" onChange={handleOnChange} >
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
                placeholder="Username or Email"
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
            <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-700 flex items-center justify-center text-white uppercase text-sm font-semibold px-4 py-2 rounded">
              Login
            </button>
          </form>
          <Link
            to={"/forgot-password"}
            className="text-red-700 text-center text-sm"
          >
            Forgot password?
          </Link>
          <p className="my-5">
            Don't have account?
            <Link to={"/signup"} className="text-blue-700 hover:underline">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
