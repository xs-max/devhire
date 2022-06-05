import React, { useState } from 'react'
import Body from '../Components/Body'
import Header from '../Components/Common/Header'
import SideBar from '../Components/SideBar'
import classes from './Layout.module.css'

const Layout = ({children}) => {

    const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div className={classes.layout}>
        <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <Body>
            {children}
        </Body>
    </div>
  )
}

export default Layout