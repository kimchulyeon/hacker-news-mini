import { getShowStoryIds } from '../../../utils/apis'
import React, { useState, useEffect } from 'react'
import ShowStory from './ShowStory'

import { useScrollUpdate } from '../../../utils/useScrollUpdate'

const ShowStories = () => {
  const { count } = useScrollUpdate()
  const [storyIds, setStoryIds] = useState([])

  useEffect(() => {
    // console.log(getStoryId()) //promise 출력
    getShowStoryIds().then((data) => setStoryIds(data))
  }, [])

  //리턴..
  return (
    <div>
      {storyIds.slice(0, 20).map((storyId) => (
        <ShowStory key={storyId} storyId={storyId} />
      ))}
    </div>
  )
}

export default ShowStories
