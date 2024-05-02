import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import Navigation  from '@/components/site/navigation'
import React from 'react'

const Layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark}}>
      <main>
          <Navigation />
          {children}
      </main>
    </ClerkProvider>
  )
}

export default Layout