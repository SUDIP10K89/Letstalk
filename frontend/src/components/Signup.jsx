import React from "react";

const Signup = () => {
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
            <input type="text" className="w-72 input input-sm text-black" />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text text-red-200">
                Username
              </span>
            </label>
            <input type="text" className="w-72 input input-sm text-black" />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text text-red-200">
                Password
              </span>
            </label>
            <input type="password" className="w-72 input input-sm text-black" />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text text-red-200">
                Confirm Password
              </span>
            </label>
            <input type="password" className="w-72 input input-sm text-black" />
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked
              className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
