import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PuffLoader } from 'react-spinners';
import numeral from "numeral";
import DevCard from '../../Components/Common/DevCard';
import classes from './Home.module.css'
import { makeDevFavorite } from '../../Store/slices/developersSlice';

const Home = () => {

    const dispatch = useDispatch();
    const {loading, developers, favorites} = useSelector(state => state.developer);
    const { currentCurrency, rate } = useSelector(state => state.currency);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
  
    const makeFavorite = (dev) => {
        dispatch(makeDevFavorite({dev}))
    }

  return (
    <div className={classes.home}>
        <div className={classes.home__content}>
              <div className={classes.home__content_header}>
                  <h2>Hire Top Developers</h2>
              </div>
              <div className={`${classes.home__developers} ${loading ? classes.loader : ''}` } >
                  {loading ? <PuffLoader  color={'#1D9BF0'} loading={loading}  size={250} />
                  :
                    developers.map((item, index) => (
                        <div key={index} className={classes.home__developers_card}>
                            <DevCard id={item.profile_id} avatar={item.avatar} cover={item.service_photo} name={item.display_name} price={numeral(+item.starting_from * (rate || 1)).format('0,0.00')} isFavorite={favorites.includes(item.profile_id) ? true : false} currency={currentCurrency?.symbol} makeFavorites={makeFavorite} />
                        </div>
                    ))}
              </div>
        </div>
    </div>
  )
}

export default Home