import React from 'react'
import TopLogo from './components/Common/TopLogo'
import EditorBase from './components/EditorPage/EditorBase'
import CopySideBar from './components/SideBar/CopySideBar/CopySideBar'
import { useEffect } from 'react'
import useStore from './lib/ZustStore'

const App = () => {
 const { deleteDocument } = useStore((state) => state);
useEffect(() => {
  deleteDocument();
},[])
 
  return (
    <>
    <TopLogo/>
    <EditorBase/>
    <CopySideBar/>
    </>
  )
}

export default App
