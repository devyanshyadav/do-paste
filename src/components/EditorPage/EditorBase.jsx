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
    </main>
  )
}

export default EditorBase