import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper/modules'
import Card from './Card'
import './Cards.css'

export default function Cards() {
  return (
    <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
      <SwiperSlide className="w-10">
        <Card title="~blog" href="/blog" />
      </SwiperSlide>
      <SwiperSlide>
        <Card title="~blog" href="/blog" />
      </SwiperSlide>
    </Swiper>
  )
}
