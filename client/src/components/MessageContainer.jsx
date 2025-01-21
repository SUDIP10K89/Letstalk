import React from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";

const MessageContainer = () => {
  return (
    <div className="rounded-lg w-96 relative flex flex-col h-[600px] shadow-xl bg-gray-800">
      {/* Header with user info */}
      <div className="flex items-center gap-4 bg-gradient-to-r from-indigo-600 to-indigo-700 px-4 py-3 rounded-tr-lg">
        <div className="relative">
          <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/20">
            <img
              src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Online status indicator */}
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full ring-2 ring-white"></div>
        </div>
        <div>
          <p className="text-white font-medium">Sudip</p>
        </div>
      </div>

      {/* Messages container */}
      <div className="flex-1 overflow-y-auto">
        <Messages />
      </div>

      {/* Input area */}
      <div className="border-t border-gray-500">
        <SendInput />
      </div>
    </div>
  );
};

export default MessageContainer;
