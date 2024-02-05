import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper/modules'
import Card from './Card'
import './Cards.css'
import blogbg from '@images/cardbg.png'
import aboutbg from '@images/aboutbg.png'

export default function Cards() {
  return (
    <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]}>
      <SwiperSlide>
        <Card title="~/about" href="/about" bg={aboutbg.src} />
      </SwiperSlide>
      <SwiperSlide className="w-10">
        <Card title="~/blog" href="/blog" bg={blogbg.src} />
      </SwiperSlide>
    </Swiper>
  )
}
