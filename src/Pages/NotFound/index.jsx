import React from 'react'
import { Link } from 'react-router-dom';
import classes from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={classes.notFound}>
      <h1>Page Not Found 😱😱😱</h1>
      <Link className={classes.notFound__link} to={'/'} >Go TO Home Page</Link>
    </div>
  )
}

export default NotFound