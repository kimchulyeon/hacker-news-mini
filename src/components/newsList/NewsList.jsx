import React from 'react'
import AskStories from './stories/AskStories'
import NewStories from './stories/NewStories'
import ShowStories from './stories/ShowStories'
import TopStories from './stories/TopStories'

const NewsList = (props) => {
  if (props.newsList === 0) {
    return <TopStories />
  } else if (props.newsList === 1) {
    return <NewStories />
  } else if (props.newsList === 2) {
    return <AskStories />
  } else if (props.newsList === 3) {
    return <ShowStories />
  }
}

export default NewsList
