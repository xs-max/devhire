import React from 'react'
import classes from './SideBar.module.css'
import { ReactComponent as SearchGray } from '../../Assets/Searchgray.svg'
import {ReactComponent as Heart }from '../../Assets/Heart.svg'
import NavItem from './NavItem'

const SideBar = () => {
    const navItems = [
        {nav: 'Home', icon: <SearchGray />, link: '/'},
        {nav: 'Favorites', icon: <Heart />, link: '/favorites'},
    ]
  return (
    <div className={classes.sideBar}>
        <div className={classes.sideBar__header}>
            <a>Dev<span>Hire</span></a>
        </div>
        <div className={classes.sideBar__navs}>
            {navItems.map((item, index) => (
                
                <NavItem key={index} nav={item.nav} icon={item.icon} link={item.link} />
            ))}
        </div>
    </div>
  )
}

export default SideBar