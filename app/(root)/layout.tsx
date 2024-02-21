// Import MobileNav component from shared folder
import MobileNav from '@/components/shared/MobileNav'
// Import Sidebar component from shared folder
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'
// Import Toaster component from ui folder
import { Toaster } from '@/components/ui/toaster'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='root'>
      <Sidebar/>
      <MobileNav/>

        <div className='root-container'>
            <div className='wrapper'>
            {children}
            </div>
        </div>
        <Toaster/>
    </main>
  )
}

export default Layout
