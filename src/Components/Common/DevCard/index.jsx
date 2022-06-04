import React from 'react'
import classes from './DevCard.module.css'
import Pic from '../../../Assets/image2.png'
import Avatar from '../../../Assets/Ellipse1.png'
import {ReactComponent as Heart} from '../../../Assets/Heart-nostroke.svg'

const DevCard = () => {
  return (
    <div className={classes.devCard}>
        <div className={classes.devCard__cover}>
            <img src={Pic} alt="cover image" />
        </div>
        <div className={classes.devCard__favorite}>
              <Heart className={classes.devCard__favorite_heart} />
        </div>
        <div className={classes.devCard__avatar}>
            <img src={Avatar} alt="cover image" />
        </div>
        <div className={classes.devCard__footer}>
            <div className={classes.devCard__footer_name}>
                <h5>Wale Davies</h5>
                <p>&#8358;30,000</p>
            </div>
            <div className={classes.devCard__footer_cta}>
                <a href='#'>Hire</a>
            </div>
        </div>
    </div>
  )
}

export default DevCard