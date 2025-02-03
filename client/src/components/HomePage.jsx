import React from "react";
import Sidebar from "./Sidebar";
import MessageContainer from "./MessageContainer";

const HomePage = () => {
  return (
    <div>
      <div className="flex w-full rounded-lg shadow-lg m-0">
        <div className="bg-gray-800 border-r border-gray-300 transition-all duration-300">
          <Sidebar />
        </div>
        <div className="flex-1 bg-gray-500 transition-all duration-300">
          <MessageContainer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
