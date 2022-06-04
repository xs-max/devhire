import React, { Children } from 'react'
import Footer from '../Footer'
import classes from './Body.module.css'

const Body = ({children}) => {
  return (
    <div className={classes.body}>
        <div className={classes.body__content}>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Body