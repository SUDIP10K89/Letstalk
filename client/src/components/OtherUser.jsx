import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../redux/userSlice';

const OtherUser = ({user}) => 
  {
    const dispatch = useDispatch();
    const {selectedUser} = useSelector(store=>store.user)
    const selectedUserHandler = ()=>{
      console.log(user)
      dispatch(setSelectedUser(user));
    }

  return (
    <div className='p-2'>
  <div onClick={selectedUserHandler} className={`${selectedUser?._id===user?._id ? 'bg-gray-700':''} flex items-center gap-1 hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer`}>
    {/* Avatar container */}
    <div className='relative'>
      <div className='w-10 h-10 rounded-full overflow-hidden'>
        <img 
          src={user?.profilePhoto} 
          alt="User avatar"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Online status indicator */}
      <div className='absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full ring-2 ring-white dark:ring-gray-800'></div>
    </div>

    {/* Username */}
    <div>
      <p className='font-medium text-gray-800 dark:text-gray-200'>{user?.fullName}</p>
    </div>
  </div>
</div>
  )
}

export default OtherUser
