import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import DailyNewsItemContent from './DailyNewsItemContent'

const DailyNewsItem = () => {
  return (
    <Swiper spaceBetween="16rem" slidesPerView={2}>
      <SwiperSlide>
        <DailyNewsItemContent />
      </SwiperSlide>
      <SwiperSlide>
        <DailyNewsItemContent />
      </SwiperSlide>
      <SwiperSlide>
        <DailyNewsItemContent />
      </SwiperSlide>
      <SwiperSlide>
        <DailyNewsItemContent />
      </SwiperSlide>
    </Swiper>
  )
}

export default DailyNewsItem
