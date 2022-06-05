import React, { useEffect, useState } from 'react'
import Footer from '../Footer'
import classes from './Body.module.css'

import CurrencyOption from '../Common/CurrencyOption'
import { fetchDevData } from '../../Store/slices/developersSlice'
import { useDispatch } from 'react-redux'

const Body = ({children}) => {

    const [isFetched, setIsFetched] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!isFetched) {
            dispatch(fetchDevData())
            setIsFetched(true);
        }else {
            return;
        }
    }, [dispatch])

  return (
    <div className={classes.body}>
        <CurrencyOption show={showOptions} setShowOptions={setShowOptions} />
        <div className={classes.body__content}>
            {children}
        </div>
          <Footer showOptions={showOptions} setShowOptions={setShowOptions} />
    </div>
  )
}

export default Body