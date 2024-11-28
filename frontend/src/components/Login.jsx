import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {Link,useNavigate} from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8080/api/v1/user/login`,user,{
        headers:{
          'Content-Type':'application/json',
        },
        withCredentials:true
      });
        navigate('/');
        console.log(res);
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error)
    }
    setUser({
      username: "",
      password: "",
    });
    console.log(user);
  };
  return (
    <div className="text-white">
      <div className="h-full w-full p-7 bg-yellow-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-extrabold text-red-200">Signup</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className="label p-1">
              <span className="text-base label-text text-red-200">
                Username
              </span>
            </label>

            <input
            value={user.username}
            onChange={(e)=>setUser({...user,username:e.target.value})} 
            type="text" className="w-72 input input-sm text-black" />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text text-red-200">
                Password
              </span>
            </label>
            <input
            value={user.password}
            onChange={(e)=>setUser({...user,password:e.target.value})} 
            type="password" className="w-72 input input-sm text-black" />
          </div>
          <p className="mt-2">
            Already have an account?
            <Link to="/register" className="text-green-200">
              Signup
            </Link>
          </p>
          <button type="submit" className="btn btn-accent w-full mt-1">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
