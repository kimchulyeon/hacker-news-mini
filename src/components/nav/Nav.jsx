import React from 'react'
import styles from './Nav.module.css'

const Nav = ({ setNewsList }) => {
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.nav}>
        <div
          onClick={() => {
            setNewsList(0)
          }}
        >
          Top
        </div>
        <div
          onClick={() => {
            setNewsList(1)
          }}
        >
          New
        </div>
        <div
          onClick={() => {
            setNewsList(2)
          }}
        >
          Ask
        </div>
        <div
          onClick={() => {
            setNewsList(3)
          }}
        >
          Show
        </div>
      </div>
    </nav>
  )
}

export default Nav
