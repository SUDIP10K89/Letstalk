import React from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'

const HomePage = () => {
  return (
    <div>
  {/* Main container with subtle shadow and rounded corners */}
  <div className="flex w-full rounded-lg shadow-lg m-0 overflow-hidden">
    {/* Sidebar */}
    <div className="w-[280px] min-w-[280px] max-w-[380px] bg-gray-800 border-r border-gray-300 transition-all duration-300">
      <Sidebar />
    </div>

    {/* Message container */}
    <div className="flex-1 bg-gray-500 transition-all duration-300">
      <MessageContainer />
    </div>
  </div>
</div>
  )
}

export default HomePage
