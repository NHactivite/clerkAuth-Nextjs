import { UserProfile } from '@clerk/nextjs'
import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

const Profile = async() => {
    const {userId}=await auth()
    console.log(userId);
    
    const isAuth=!userId;
    const user=await currentUser()
     console.log(user);
     
    if(isAuth){
        redirect("/")
    }
  return (
    <div className='flex flex-col items-center justify-center mt-2'>
        <h1 className='text-2xl mb-2'>{user?.fullName}</h1>
        
        <UserProfile/>
        
    </div>
  )
}

export default Profile