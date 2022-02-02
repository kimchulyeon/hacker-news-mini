import React, { useEffect, useState } from 'react'
import { getStory, time } from '../../../utils/apis'
import styles from './CSS/TopStory.module.css'
import Toggle from './toggle/Toggle'

import { HiChevronDown } from 'react-icons/hi'
import { IoLinkSharp } from 'react-icons/io5'
import { MdStars, MdMessage } from 'react-icons/md'

const TopStory = ({ storyId }) => {
  const [story, setStory] = useState({})
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data))
  }, [])
  // console.log(story)

  return story && story.url && story.kids ? (
    <article className={styles.article}>
      <div className={styles.article_wrapper}>
        <div className={styles.article_title}>
          <a href={story.url} target="_blank">
            {story.title}
          </a>
          <div
            className={styles.toggleBtn}
            onClick={() => {
              setToggle(!toggle)
            }}
          >
            <HiChevronDown size="18rem" />
          </div>
          {/* 여기에 작성자 토글로 들어가야함 */}
          {toggle ? <Toggle story={story} /> : null}
        </div>
        <div className={styles.article_footer}>
          <div className={styles.link_icon}>
            <IoLinkSharp size="18rem" />
          </div>
          <div className={styles.article_score}>
            <div className={styles.icon}>
              <MdStars size="16rem" color="#838489" />
            </div>
            <div className={styles.score}>{story.score}</div>
          </div>
          <div className={styles.article_comment}>
            <div className={styles.message_icon}>
              <MdMessage size="16rem" color="#FF3E00" />
            </div>
            <div className={styles.message_number}>{story.kids.length}</div>
          </div>
        </div>
      </div>
    </article>
  ) : null
}

export default TopStory
