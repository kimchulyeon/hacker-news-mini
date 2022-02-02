import React from 'react'
import AskStories from '../newsList/stories/AskStories'
import NewStories from '../newsList/stories/NewStories'
import ShowStories from '../newsList/stories/ShowStories'
import TopStories from '../newsList/stories/TopStories'

const TabMenu = ({ newsList }) => {
  if (newsList === 0) {
    return <TopStories />
  } else if (newsList === 1) {
    return <NewStories />
  } else if (newsList === 2) {
    return <AskStories />
  } else if (newsList === 3) {
    return <ShowStories />
  }
}

export default TabMenu
