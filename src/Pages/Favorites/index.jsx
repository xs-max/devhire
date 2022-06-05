import React, { useEffect } from 'react'
import numeral from "numeral";
import { useSelector } from 'react-redux';
import DevCard from '../../Components/Common/DevCard';
import classes from './Favorites.module.css'

const Favorite = () => {

    const {developers, loading, favorites} = useSelector(state => state.developer);
    const { currentCurrency, rate } = useSelector(state => state.currency);
    const cards = developers.filter(item => favorites.includes(item.profile_id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className={classes.favorite}>
            <div className={classes.favorite__content}>
                <div className={classes.favorite__content_header}>
                    <h2>Hire Top Developers</h2>
                </div>
                <div className={classes.favorite__developers} >
                    {cards.length == 0 ? <h2>"No Favorite Developer Yet"</h2>
                    :
                    cards.map((item, index) => (
                        <div key={index} className={classes.favorite__developers_card}>
                            <DevCard id={item.profile_id} avatar={item.avatar} cover={item.service_photo} name={item.display_name} price={numeral(+item.starting_from * (rate || 1)).format('0,0.00')} isFavorite={favorites.includes(item.profile_id) ? true : false} currency={currentCurrency?.symbol} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Favorite