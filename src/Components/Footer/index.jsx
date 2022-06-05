import React, { useEffect, useState } from 'react'
import classes from './Footer.module.css'
import Nigeria from '../../Assets/nigeria.png'
import {ReactComponent as CarretDown } from '../../Assets/carretdown.svg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurData } from '../../Store/slices/currencySlice'

const Footer = ({setShowOptions, showOptions}) => {

    const {net_conversions, currencies, currentCurrency} = useSelector(state => state.currency);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCurData())
    }, []);

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
                <img src={currentCurrency?.flag_url} alt=""/>
                <p>{currentCurrency?.name}</p>
            </div>
            <div className={classes.footer__currency_arrow}>
                <CarretDown />
            </div>
        </div>
    </div>
  )
}

export default Footer