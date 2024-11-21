import React from 'react'

const Login = () => {
  return (
    <div className="text-white">
      <div className="h-full w-full p-7 bg-yellow-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-extrabold text-red-200">Signup</h1>
        <form action="">
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
          <p className="mt-2">Already have an account? <a href = "/register" className="text-green-200">Signup</a> </p>
          <button type="submit" className="btn btn-accent w-full mt-1">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
