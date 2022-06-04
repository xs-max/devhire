import React, { useState } from 'react'
import classes from './Footer.module.css'
import Nigeria from '../../Assets/nigeria.png'
import {ReactComponent as CarretDown } from '../../Assets/carretdown.svg'
import CurrencyOption from '../Common/CurrencyOption'

const Footer = () => {

    const [showOptions, setShowOptions] = useState(false);

    const openOptions = () => {
        setShowOptions(!showOptions);
    }

  return (
    <div className={classes.footer}>
        <CurrencyOption show={showOptions} setShowOptions={setShowOptions}/>
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