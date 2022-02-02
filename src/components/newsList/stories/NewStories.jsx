import { getNewStoryIds } from '../../../utils/apis'
import React, { useState, useEffect } from 'react'
import NewStory from './NewStory'
import { useScrollUpdate } from '../../../utils/useScrollUpdate'

const NewStories = () => {
  const { count } = useScrollUpdate()
  const [storyIds, setStoryIds] = useState([])

  useEffect(() => {
    // console.log(getStoryId()) //promise 출력
    getNewStoryIds().then((data) => setStoryIds(data))
  }, [])

  //리턴..
  return (
    <div>
      {storyIds.slice(0, 20).map((storyId) => (
        <NewStory key={storyId} storyId={storyId} />
      ))}
    </div>
  )
}

export default NewStories
