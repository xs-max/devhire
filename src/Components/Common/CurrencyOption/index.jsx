import React, { useEffect } from 'react';
import classes from './CurrencyOption.module.css';
import Nigeria from '../../../Assets/nigeria.png'
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrency, fetchCurData } from '../../../Store/slices/currencySlice';

const CurrencyOption = ({show, setShowOptions}) => {

    const { currencies, netConversions } = useSelector(state => state.currency);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCurData())
    }, []);

    const handleCurencyClick = (currency, id) => {
        dispatch(changeCurrency({currency, id}))
        setShowOptions(!show);
    }

  return (
    <div className={`${classes.currencyOption} ${show ? classes.currencyOption__show : ''}`}>
        {
            currencies.map((item, index) => (
                <div onClick={() => handleCurencyClick(item, item.id)} key={index} className={`${classes.currencyOption__currency_flag} ${index % 2 === 0 ? classes.bg__grey: ''}`}>
                    <img src={item.flag_url} alt="" />
                    <p>{`${item.name}(${item.short})`}</p>
                </div>
            ))
        }
    </div>
  )
}

export default CurrencyOption