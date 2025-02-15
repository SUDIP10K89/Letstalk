import React from 'react'
import OtherUser from './OtherUser'
import useGetOtherUsers from '../hooks/useGetOtherUsers'
import { useSelector } from 'react-redux';
import useGetMessages from '../hooks/useGetMessages';

const OtherUsers = () => {

  useGetOtherUsers();
  const {otherUsers} = useSelector((store)=>store.user);
  if(!otherUsers){
    return;
  }
  return (
    <div className="h-60 px-3 py-2 space-y-4 scroll-smooth scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
    <div>
    {
      otherUsers?.map((user) =>{
        return <OtherUser key={user._id} user={user} />
      })
    }
    </div>
  </div>
  )
}

export default OtherUsers
