import React from 'react'

const SendInput = () => {
  return (
    //sending chat input
    <form className='sticky bottom-0 w-full p-2.5 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700'>
    <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-900 rounded-full hover:shadow-md transition-shadow duration-200">
      <input 
        type="text" 
        className="w-full bg-transparent outline-none placeholder-gray-400 dark:placeholder-gray-500 text-gray-700 dark:text-gray-200" 
        placeholder="Type a message..." 
      />
      <button type="submit" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-200">
        <svg 
          className='w-6 h-6' 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"/>
        </svg>
      </button>
    </div>
   </form>
  )
}

export default SendInput
