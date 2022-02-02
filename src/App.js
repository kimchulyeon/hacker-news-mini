import React, { useState } from 'react'
import styles from './App.module.css'
import Header from './components/header/Header'
import { Route, Link, Switch } from 'react-router-dom'
import DailyNews from './components/dailyNews/DailyNews'
import Nav from './components/nav/Nav'

import TabMenu from './components/tabMenu/TabMenu'

const App = () => {
  const [newsList, setNewsList] = useState(0)

  return (
    <Switch>
      <Route path="/">
        {/* 홈 메뉴 */}
        <div className={styles.container}>
          <Header />
          <DailyNews />
          <Nav setNewsList={setNewsList} />
          <TabMenu newsList={newsList} />
        </div>
      </Route>
    </Switch>
  )
}

export default App
