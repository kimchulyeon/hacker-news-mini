import React from 'react'
import styles from './Header.module.css'
import { FaQuestionCircle } from 'react-icons/fa'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="img/logo.png" alt="logo" />
      </div>
      <input type="text" maxLength="24" />
      <div className={styles.questionMark}>
        <FaQuestionCircle size="18rem" color="#6D6D74" />
      </div>
    </header>
  )
}

export default Header
