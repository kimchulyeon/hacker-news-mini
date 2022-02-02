import styles from './DailyNewsItemContent.module.css'

const DailyNewItemContent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.karma}>
        <div className={styles.karma_wrap}>
          <div className={styles.karma_wrap__text}></div>
        </div>
      </div>

      <h3>Cameron Williamson</h3>
      <p className={styles.title}>Advice for applying to Junior Software Enginnering roles?</p>
      <p className={styles.content}></p>
      <span className={styles.when}></span>

      <div className={styles.daily_footer}>
        <div className={styles.favicon}>
          <img />
          <span className={styles.site_name}></span>
        </div>
        <div className={styles.daily_footer__sub_menu}>
          <div className={styles.score_icon}></div>
          <div className={styles.score}></div>
          <div className={styles.comment_icon}></div>
          <div className={styles.comment}></div>
        </div>
      </div>
    </div>
  )
}

export default DailyNewItemContent
