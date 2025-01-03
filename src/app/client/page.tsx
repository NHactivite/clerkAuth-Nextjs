"use client"
import { useUser } from '@clerk/nextjs'
import React from 'react'

const ClientPage = () => {
    const {isLoaded,isSignedIn,user}=useUser()

      if(!isLoaded || !isSignedIn){
        return null;
      }

  return (
    <div className='h-full flex justify-center items-center j text-2xl'>Hello, {user?.firstName} welcome to Clerk baby</div>
  )
}

export default ClientPage