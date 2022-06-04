import React from 'react';
import classes from './CurrencyOption.module.css';
import Nigeria from '../../../Assets/nigeria.png'

const CurrencyOption = ({show, setShowOptions}) => {

    console.log(show);
    const cards = new Array(13).fill(0);

    const handleCurencyClick = () => {
        setShowOptions(!show);
    }

  return (
    <div className={`${classes.currencyOption} ${show ? classes.currencyOption__show : ''}`}>
        {
            cards.map((item, index) => (
                <div onClick={handleCurencyClick} key={index} className={`${classes.currencyOption__currency_flag} ${index % 2 === 0 ? classes.bg__grey: ''}`}>
                    <img src={Nigeria} alt="" />
                    <p>Naira</p>
                </div>
            ))
        }
    </div>
  )
}

export default CurrencyOption