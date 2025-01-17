import React from 'react'

const OtherUser = () => {
  return (
    <div className='flex items-center gap-3 p-2'>
      <div className='flex items-center gap-3'>
        <div className='avatar online'>
            <div className='avatar-image w-12 rounded-full'>
                <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg" alt="" />
            </div>
        </div>
        <div>
            <p>Sudip</p>
        </div>
      </div>
    </div>
  )
}

export default OtherUser
