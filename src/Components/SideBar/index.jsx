import React from 'react'
import { FaTimes } from "react-icons/fa";
import classes from './SideBar.module.css'
import { ReactComponent as SearchGray } from '../../Assets/Searchgray.svg'
import {ReactComponent as Heart }from '../../Assets/Heart.svg'
import NavItem from './NavItem'
import { Link } from 'react-router-dom'

const SideBar = ({showSideBar, setShowSideBar}) => {
    const navItems = [
        {nav: 'Home', icon: <SearchGray />, link: '/'},
        {nav: 'Favorites', icon: <Heart />, link: '/favorites'},
    ]
  return (
    <div className={`${classes.sideBar} ${showSideBar ? classes.show : ''}` }>
        <div className={classes.sideBar__header}>
            <Link className={classes.logo} to="/">Dev<span>Hire</span></Link>
              <FaTimes className={classes.close} onClick={() => setShowSideBar(!showSideBar)} size={32} />
        </div>
        <div className={classes.sideBar__navs}>
            {navItems.map((item, index) => (
                <NavItem key={index} onClick={() => setShowSideBar(!showSideBar)} nav={item.nav} icon={item.icon} link={item.link} />
            ))}
        </div>
    </div>
  )
}

export default SideBar