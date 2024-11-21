import React from "react";

const Signup = () => {
  const [user,setUser] = useState({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:""
  })
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    
  }
  
  return (
    <div className="text-white">
      <div className="h-full w-full p-7 bg-yellow-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-extrabold text-red-200">Signup</h1>
        <form action="">
          <div>
            <label className="label p-1">
              <span className="text-base label-text text-red-200">
                Full Name
              </span>
            </label>
            <input value={user.fullName} type="text" className="w-72 input input-sm text-black" />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text text-red-200">
                Username
              </span>
            </label>
            <input value={user.username} type="text" className="w-72 input input-sm text-black" />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text text-red-200">
                Password
              </span>
            </label>
            <input value={user.password} type="password" className="w-72 input input-sm text-black" />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text text-red-200">
                Confirm Password
              </span>
            </label>
            <input value={user.confirmPassword} type="password" className="w-72 input input-sm text-black" />
          </div>

          <div className="flex items-center space-x-4 mt-3">
            <div className="flex items-center space-x-1">
              <p>Male</p>
              <input value={user.gender}
                type="checkbox"
                className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border-2 border-white"
              />
            </div>
            <div className="flex items-center space-x-1">
              <p>Female</p>
              <input value={user.gender}
                type="checkbox"
                className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border-2 border-white"
              />
            </div>
          </div>
          <p className="mt-2">Already have an account? <a href = "/login" className="text-green-200">Login</a> </p>
          <button type="submit" className="btn btn-accent w-full mt-1">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
