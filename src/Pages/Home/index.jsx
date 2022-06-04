import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DevCard from '../../Components/Common/DevCard';
import classes from './Home.module.css'
import { fetchDevData } from '../../Store/slices/developersSlice';

const Home = () => {

    const dispatch = useDispatch();
    const {loading, developers} = useSelector(state => state.developer);
    useEffect(() => {
        dispatch(fetchDevData())
    }, [])

  return (
    <div className={classes.home}>
        <div className={classes.home__content}>
              <div className={classes.home__content_header}>
                  <h2>Hire Top Developers</h2>
              </div>
              <div className={classes.home__developers} >
                    {developers.map((item, index) => (
                        <div key={index} className={classes.home__developers_card}>
                            <DevCard />
                        </div>
                    ))}
              </div>
        </div>
    </div>
  )
}

export default Home