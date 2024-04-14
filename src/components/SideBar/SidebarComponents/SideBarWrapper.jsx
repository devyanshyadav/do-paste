import React from 'react'

function SideBarWrapper({children, className}) {
  return (
    <div className={`md:w-[30vw] z-50 overflow-x-hidden h-[95vh]  my-auto top-1/2  transform  -translate-y-1/2 border border-accent overflow-y-auto rounded-tl-3xl fixed rounded-bl-3xl flex gap-3 flex-col items-center shadow-2xl bg-white p-5 ${className}`}>
        {children}
    </div>
  )
}

export default SideBarWrapper