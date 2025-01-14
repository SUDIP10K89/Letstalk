import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {Link,useNavigate} from 'react-router-dom';

const Signup = () => {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const navigate = useNavigate();

  const handleCheckbox = (gender) => {
    setUser({...user,gender});
  };
  
  const onSubmitHandler =async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8080/api/v1/user/register`,user,{
        headers:{
          'Content-Type':'application/json',
        },
        withCredentials:true
      });
      if(res.data.success){
        navigate('/login');
        toast.success(res.data.message);

      }
    } catch (error) {
      console.log(error)
    }
    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    })
  };

  return (
    <div className="text-white">
      <div className="h-full w-full p-7 bg-yellow-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-extrabold text-red-200">Signup</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className="label p-1">
              <span className="text-base label-text text-red-200">
                Full Name
              </span>
            </label>
            <input
              value={user.fullName}
              onChange={(e)=>setUser({...user,fullName:e.target.value})}
              type="text"
              className="w-72 input input-sm text-black"
            />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text text-red-200">
                Username
              </span>
            </label>
            <input
              value={user.username}
              onChange={(e)=>setUser({...user,username:e.target.value})}
              type="text"
              className="w-72 input input-sm text-black"
            />
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
              type="password"
              className="w-72 input input-sm text-black"
            />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text text-red-200">
                Confirm Password
              </span>
            </label>
            <input
              value={user.confirmPassword}
              onChange={(e)=>setUser({...user,confirmPassword:e.target.value})}
              type="password"
              className="w-72 input input-sm text-black"
            />
          </div>

          <div className="flex items-center space-x-4 mt-3">
            <div className="flex items-center space-x-1">
              <p>Male</p>
              <input
                checked={user.gender==="male"}
                onChange={()=>handleCheckbox("male")}
                type="checkbox"
                className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border-2 border-white"
              />
            </div>
            <div className="flex items-center space-x-1">
              <p>Female</p>
              <input
                checked={user.gender==="female"}
                onChange={()=>handleCheckbox("female")}
                type="checkbox"
                className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border-2 border-white"
              />
            </div>
          </div>
          <p className="mt-2">
            Already have an account?
            <Link to="/login" className="text-green-200">
              Login
            </Link>
          </p>
          <button type="submit" className="btn btn-accent w-full mt-1">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
