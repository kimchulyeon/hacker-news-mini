import { useState, useEffect } from 'react'

export const useScrollUpdate = () => {
  // 전체 스토리
  const totalStory = 500
  // 몇개씩 로딩
  const storyPerView = 10

  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(storyPerView)

  const root = document.getElementById('root')
  const scrollObject = document.documentElement
  console.log(scrollObject.scrollHeight, scrollObject.scrollTop)

  const scrollHandler = () => {
    if (scrollObject.scrollHeight / 2 >= scrollObject.scrollTop && scrollObject.scrollTop > 600) {
      setLoading(true)
    } else {
      console.log('no!')
    }
  }

  useEffect(() => {
    if (!loading) return
    if (count + storyPerView >= totalStory) {
      setCount(totalStory)
    } else {
      setCount((prevCount) => prevCount + storyPerView)
    }

    setLoading(false)
  }, [loading])

  useEffect(() => {
    root.addEventListener('scroll', scrollHandler)
    return () => root.removeEventListener('scroll', scrollHandler)
  }, [])

  return { count }
}
