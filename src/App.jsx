import React from 'react'
import TextEditor from './components/EditorPage/TextEditor'
import TopLogo from './components/Common/TopLogo'
import EditorBase from './components/EditorPage/EditorBase'
import ProfileLogo from './components/Common/ProfileLogo'
import CopySideBar from './components/SideBar/CopySideBar/CopySideBar'
import DashboardSideBar from './components/SideBar/DashboardSideBar/DashboardSideBar'
import { useEffect } from 'react'
import useStore from './lib/ZustStore'

const App = () => {
 const { pageInfo, setPageInfo,deleteDocument } = useStore((state) => state);
// useEffect(() => {
//   deleteDocument();
// },[])
 
  return (
    <>
    {/* <ProfileLogo/> */}
    <TopLogo/>
    <EditorBase/>
    <CopySideBar/>
    {/* <DashboardSideBar/> */}
   
  
    </>
  )
}

export default App