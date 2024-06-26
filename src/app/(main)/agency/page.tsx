import { getAuthUserDetails } from '@/lib/queries'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import React from 'react'

const Page = async () => {

  const authUser = await currentUser()
  if (!authUser) return redirect('/sign-in')

  // check if user has a pending invitation

  // get user data
  const user = await getAuthUserDetails();

  return (
    <div>Agency Dashboard</div>
  )
}

export default Page