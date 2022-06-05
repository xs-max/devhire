import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import classes from './Header.module.css'


const Header = ({ showSideBar, setShowSideBar}) => {
  return (
    <div className={classes.header}>
        <div className={classes.header__logo}> <Link className={classes.logo} to="/">Dev<span>Hire</span></Link></div>
        <div className={classes.header__hamburger}><FaBars onClick={() => setShowSideBar(!showSideBar)} size={32} /></div>
    </div>
  )
}

export default Header