import axios from 'axios'

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/'
export const topStoriesUrl = `${baseUrl}topstories.json`
export const newStoriesUrl = `${baseUrl}newstories.json`
export const askStoriesUrl = `${baseUrl}askstories.json`
export const showStoriesUrl = `${baseUrl}showstories.json`
export const storyUrl = `${baseUrl}item/`
export const userUrl = `${baseUrl}user/`

// Story 출력
export const getStory = async (storyId) => {
  const result = await axios.get(`${storyUrl + storyId}.json`).then(({ data }) => data)
  return result
}

// Top Story Id
export const getTopStoryIds = async () => {
  const result = await axios.get(topStoriesUrl).then(({ data }) => data)
  return result
}

// New Story Id
export const getNewStoryIds = async () => {
  const result = await axios.get(newStoriesUrl).then(({ data }) => data)
  return result
}
// Ask Story Id
export const getAskStoryIds = async () => {
  const result = await axios.get(askStoriesUrl).then(({ data }) => data)
  return result
}
// Show Story Id
export const getShowStoryIds = async () => {
  const result = await axios.get(showStoriesUrl).then(({ data }) => data)
  return result
}

// 유닉스 타임 변환
export const time = (unixTime) => {
  const seconds = Math.floor((new Date() - unixTime * 1000) / 1000)

  let interval = Math.floor(seconds / 31536000)

  if (interval > 1) {
    return `${interval} years ago`
  }
  interval = Math.floor(seconds / 2592000)

  if (interval > 1) {
    return `${interval} months ago`
  }
  interval = Math.floor(seconds / 86400)

  if (interval > 1) {
    return `${interval} days ago`
  }
  interval = Math.floor(seconds / 3600)

  if (interval > 1) {
    return `${interval} hours ago`
  }
  interval = Math.floor(seconds / 60)

  if (interval > 1) {
    return `${interval} minutes ago`
  }

  return `${Math.floor(seconds)} seconds`
}
