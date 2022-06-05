import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import classes from './NavItem.module.css'
import { ReactComponent as Heartwhitestroke } from '../../../Assets/heartwhitestroke.svg'
import { ReactComponent as Search } from '../../../Assets/Search.svg'


const NavItem = ({icon, nav, link, onClick}) => {

  const {pathname} = useLocation();

  return (
    <div onClick={onClick} className={classes.navItem}>
      <div className={`${classes.navItem__border} ${pathname === link ? classes.show_border : ''}`}></div>
        <div className={classes.navItem__nav}>
        <Link className={classes.navItem__nav_link} to={link}> <div className={pathname === link ?  classes.navItem__nav_link_icon : ''}>{pathname === link ? pathname === '/' ? <Search /> : <Heartwhitestroke /> : icon}</div> <span className={pathname === link ? classes.active : ''}>{nav}</span></Link>
        </div>
    </div>
  )
}

export default NavItem