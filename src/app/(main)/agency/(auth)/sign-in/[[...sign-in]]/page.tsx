import { SignIn } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
  return (
    <div className="flex justify-center items-center pt-12">
      <SignIn />
    </div>
  )
}

export default Page