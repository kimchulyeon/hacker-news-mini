import { getTopStoryIds } from '../../../utils/apis'
import React, { useState, useEffect, useMemo } from 'react'
import TopStory from './TopStory'

import { useScrollUpdate } from '../../../utils/useScrollUpdate'

const TopStories = () => {
  const { count } = useScrollUpdate()
  const [storyIds, setStoryIds] = useState([])

  useEffect(() => {
    // console.log('count', count)

    // console.log(getStoryId()) //promise 출력
    getTopStoryIds().then((data) => setStoryIds(data))
  }, [])

  //리턴..
  return (
    <div className="story-wrapper">
      {storyIds.slice(0, 20).map((storyId) => (
        <TopStory key={storyId} storyId={storyId} />
      ))}
    </div>
  )
}

export default TopStories
