import React from 'react'
import styles from './DailyNews.module.css'
import DailyNewsItem from './DailyNewsItem'

const DailyNews = () => {
  return (
    <div className={styles.dailyNews}>
      <h2 className={styles.dailyNewsTitle}>Daily News</h2>
      <DailyNewsItem />
    </div>
  )
}

export default DailyNews
