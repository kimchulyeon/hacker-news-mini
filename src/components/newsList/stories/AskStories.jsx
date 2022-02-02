import { getAskStoryIds } from '../../../utils/apis'
import React, { useState, useEffect } from 'react'
import AskStory from './AskStory'

import { useScrollUpdate } from '../../../utils/useScrollUpdate'

const AskStories = () => {
  const { count } = useScrollUpdate()
  const [storyIds, setStoryIds] = useState([])

  useEffect(() => {
    // console.log(getStoryId()) //promise 출력
    console.log(storyIds)
    getAskStoryIds().then((data) => setStoryIds(data))
  }, [])

  //리턴..
  return (
    <div>
      {storyIds.slice(0, 20).map((storyId) => (
        <AskStory key={storyId} storyId={storyId} />
      ))}
    </div>
  )
}
export default AskStories
