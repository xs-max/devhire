import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import classes from './DevCard.module.css'
import {ReactComponent as Heart} from '../../../Assets/Heart-nostroke.svg'
import { makeDevFavorite } from '../../../Store/slices/developersSlice'


const DevCard = ({cover, isFavorite, avatar, name, price, currency, id}) => {

    const dispatch = useDispatch()

    const makeFavorite = (dev) => {
        dispatch(makeDevFavorite({ dev }))
    }

  return (
    <div className={classes.devCard}>
        <div className={classes.devCard__cover}>
            <img src={cover} alt="cover image" />
        </div>
        <div onClick={() => makeFavorite(id)} className={`${classes.devCard__favorite} ${isFavorite ? classes.favor : ''}`}>
              <Heart className={`${classes.devCard__favorite_heart} ${isFavorite ? classes.favor_heart : ''}`} />
        </div>
        <div className={classes.devCard__avatar}>
            <img src={avatar} alt="cover image" />
        </div>
        <div className={classes.devCard__footer}>
            <div className={classes.devCard__footer_name}>
                <h5>{name}</h5>
                  <p>{currency || '₦'}{price}</p>
            </div>
            <div className={classes.devCard__footer_cta}>
                <a href='#'>Hire</a>
            </div>
        </div>
    </div>
  )
}

export default DevCard