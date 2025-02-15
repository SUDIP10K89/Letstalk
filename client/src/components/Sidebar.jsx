import React from "react";
import OtherUsers from "./OtherUsers";
import api from "../api";
import {useNavigate} from "react-router-dom"
import toast from "react-hot-toast"

const Sidebar = () => {
  const navigate = useNavigate();
const logoutHandler =async ()=>{
  try {
    const res = await api.get('/v1/user/logout')
    toast.success(res.data.message)
    navigate("/login")
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div className="flex flex-col border-r border-gray-200 dark:border-gray-700">
    {/* Search Section */}
    <div className="p-4">
      <form>
        <div className="relative">
          <input 
            type="text" 
            className="w-full bg-gray-50 dark:bg-gray-800 rounded-lg pl-4 pr-10 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 border border-gray-200 dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 transition-all duration-200" 
            placeholder="Search contacts..." 
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </form>
    </div>
   
    {/* Users List */}
    <div className="flex-1 overflow-y-auto">
      <OtherUsers />
    </div>
   
    {/* Logout Button */}
    <div className="p-4 border-t border-gray-500 dark:border-gray-700">
      <button onClick={logoutHandler} className="w-full px-4 py-2 text-sm font-medium text-red-300 dark:text-red-400 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors duration-200">
        Logout
      </button>
    </div>
   </div>
  );
};

export default Sidebar;
