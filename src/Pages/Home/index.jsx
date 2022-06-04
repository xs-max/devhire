import React from 'react'
import DevCard from '../../Components/Common/DevCard';
import classes from './Home.module.css'

const Home = () => {

    const cards = new Array(12).fill(0);

  return (
    <div className={classes.home}>
        <div className={classes.home__content}>
              <div className={classes.home__content_header}>
                  <h2>Hire Top Developers</h2>
              </div>
              <div className={classes.home__developers} >
                    {cards.map((item, index) => (
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