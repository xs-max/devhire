import React from 'react'
import classes from './DevCard.module.css'
import Pic from '../../../Assets/image2.png'
import Avatar from '../../../Assets/Ellipse1.png'
import {ReactComponent as Heart} from '../../../Assets/Heart-nostroke.svg'

const DevCard = ({cover, isFavorite, avatar, name, price, currency}) => {

  return (
    <div className={classes.devCard}>
        <div className={classes.devCard__cover}>
            <img src={cover} alt="cover image" />
        </div>
        <div className={`${classes.devCard__favorite} ${isFavorite ? classes.favor : ''}`}>
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