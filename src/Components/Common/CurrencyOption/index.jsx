import React, { useEffect } from 'react';
import classes from './CurrencyOption.module.css';
import Nigeria from '../../../Assets/nigeria.png'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurData } from '../../../Store/slices/currencySlice';

const CurrencyOption = ({show, setShowOptions}) => {

    const { loading, currencies } = useSelector(state => state.currency);
    console.log(currencies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCurData())
    }, []);

    const handleCurencyClick = () => {

        setShowOptions(!show);
    }

  return (
    <div className={`${classes.currencyOption} ${show ? classes.currencyOption__show : ''}`}>
        {
            currencies.map((item, index) => (
                <div onClick={handleCurencyClick} key={index} className={`${classes.currencyOption__currency_flag} ${index % 2 === 0 ? classes.bg__grey: ''}`}>
                    <img src={item.flag_url} alt="" />
                    <p>{`${item.name}(${item.short})`}</p>
                </div>
            ))
        }
    </div>
  )
}

export default CurrencyOption