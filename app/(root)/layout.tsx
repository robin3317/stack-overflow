import React from 'react'
import LeftSideBar from '~/components/shared/left-sidebar'
import Navbar from '~/components/shared/navbar'
import RightSidebar from '~/components/shared/right-sidebar'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <main className='background-light850_dark100 relative'>
      <Navbar />
      <div className='flex'>
        <LeftSideBar />
        <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14'>
          <div className='mx-auto w-full max-w-5xl'>{children}</div>
        </section>
        <RightSidebar />
      </div>
      Toaster
    </main>
  )
}
