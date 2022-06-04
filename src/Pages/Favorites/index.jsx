import React from 'react'
import DevCard from '../../Components/Common/DevCard';
import classes from './Favorites.module.css'

const Favorite = () => {

    const cards = new Array(3).fill(0);

    return (
        <div className={classes.favorite}>
            <div className={classes.favorite__content}>
                <div className={classes.favorite__content_header}>
                    <h2>Hire Top Developers</h2>
                </div>
                <div className={classes.favorite__developers} >
                    {cards.map((item, index) => (
                        <div key={index} className={classes.favorite__developers_card}>
                            <DevCard />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Favorite