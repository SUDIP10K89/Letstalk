import React from 'react'
import Message from './Message'

const Messages = () => {
  return (
    <div className="overflow-y-auto px-4 py-2 space-y-4 scroll-smooth scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
    <Message />
    <Message />
    <Message />
    <Message />
    <Message />
    <Message />
    <Message />
    <Message />
    <Message />
    <Message />
  </div>
  )
}

export default Messages
