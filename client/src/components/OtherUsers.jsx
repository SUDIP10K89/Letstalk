import React from 'react'
import OtherUser from './OtherUser'
import useGetOtherUsers from '../hooks/useGetOtherUsers'

const OtherUsers = () => {

  useGetOtherUsers();
  return (
    <div className="overflow-y-auto h-96 px-3 py-2 space-y-4 scroll-smooth scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
 <div> 
   <OtherUser />
   <OtherUser />
   <OtherUser />
   <OtherUser />
   <OtherUser />
   <OtherUser />
   <OtherUser />
   <OtherUser />
   <OtherUser />
 </div>
</div>
  )
}

export default OtherUsers
