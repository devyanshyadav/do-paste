import React from 'react'

const TopLogo = () => {
  return (
    <div className='font-semibold p-1 pr-4 rounded-r-full bg-white fixed top-2 left-0 border border-accent flex gap-1 items-center'>
        <img src="/vite.svg" alt="logo" className='md:w-12 w-10' />
        <span>
         Write and Share <p className='text-xs flex flex-col'>effortlessly</p></span></div>
  )
}

export default TopLogo