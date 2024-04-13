import React, { useState } from 'react'
import EditorHead from './EditorHead'
import EditorBody from './EditorBody'
import EditorFoot from './EditorFoot'

const EditorBase = () => {
  const [keyWordStatus, setKeyWordStatus] = useState(false)
  return (
    <main className='w-[65vw] md:h-screen  flex flex-col gap-2 mx-auto py-16 pb-10 '>
     <EditorHead/>
     <EditorBody/>
     
     {
       keyWordStatus ? <EditorFoot setKeyWordStatus={setKeyWordStatus}/> : <button className='text-sm self-start font-semibold hover:underline' onClick={()=>setKeyWordStatus(true)}>Add Keywords</button>
     }
      <span className='text-sm font-semibold select-none mx-auto opacity-70 fixed left-1/2 bottom-2 transform -translate-x-1/2 '>Developed by Aasu and Devyansh</span>

    </main>
  )
}

export default EditorBase