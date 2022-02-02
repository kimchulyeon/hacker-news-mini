import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { time } from '../../../../utils/apis'
import styles from './Toggle.module.css'

const Toggle = ({ story }) => {
  return (
    <div className={styles.container}>
      <span className={styles.username}>username</span>
      <div className={styles.time}>{time(story.time)}</div>
    </div>
  )
}

export default Toggle
