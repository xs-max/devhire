import React, { useState } from 'react'
import classes from './Footer.module.css'
import Nigeria from '../../Assets/nigeria.png'
import {ReactComponent as CarretDown } from '../../Assets/carretdown.svg'

const Footer = ({setShowOptions, showOptions}) => {

    

    const openOptions = () => {
        setShowOptions(!showOptions);
    }

  return (
    <div className={classes.footer}>
        
        <div className={classes.footer__copy}>
            <p>© 2022 DEVHIRE</p>
        </div>
        <div onClick={openOptions} className={classes.footer__currency}>
            <div className={classes.footer__currency_flag}>
                <img src={Nigeria} alt=""/>
                <p>Naira</p>
            </div>
            <div className={classes.footer__currency_arrow}>
                <CarretDown />
            </div>
        </div>
    </div>
  )
}

export default Footer