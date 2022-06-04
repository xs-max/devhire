import React from 'react'
import Body from '../Components/Body'
import SideBar from '../Components/SideBar'
import classes from './Layout.module.css'

const Layout = ({children}) => {
  return (
    <div className={classes.layout}>
        <SideBar />
        <Body>
            {children}
        </Body>
    </div>
  )
}

export default Layout