import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
import { FaRegCircleUser } from "react-icons/fa6";
import profileImage from "../assest/sham.jpg";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import ROLE from "../clien-side/src/common/role";

const Adminpage = () => {
  const user = useSelector((state) => state?.user?.user);
  const navigate = useNavigate()

  useEffect(() =>{
  if(user?.role !== ROLE.ADMIN){
     navigate('/')
  }
  }, [user])
  return (
    <div className="min-h-[calc(100vh-120px)] md:flex hidden">
      <aside className="bg-white min-h-full w-full max-w-60 customShadow">
        <div className="h-32 flex items-center justify-center flex-col">
          <div className="text-4xl cursor-pointer relative flex justify-center">
            {user?.email ? (
              <img
                src={profileImage}
                className="w-20 h-20 rounded-full"
                alt={user?.name}
              />
            ) : (
              <FaRegCircleUser />
            )}
          </div>
          <p className="text-lg capitalize font-semibold">{user?.name}</p>
          <p className="text-sm">{user?.role}</p>
        </div>
        {/* navigation */}
        <div>
            <nav className="grid p-4">
                <Link to={"all-users"} className="px-2 py-1 hover:bg-slate-100">All Users</Link>
                <Link to={"product"} className="px-2 py-1 hover:bg-slate-100">All Products</Link>
            </nav>
        </div>
      </aside>
      <main className="w-full h-full p-2">
        <Outlet />
      </main>
    </div>
  );
};

export default Adminpage;
