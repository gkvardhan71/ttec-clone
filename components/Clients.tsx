"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

export default function Clients() {

  return (

<section className="py-20 bg-white text-center">

<h2 className="text-3xl font-bold mb-10">
Trusted by Leading Companies
</h2>

<Swiper
spaceBetween={40}
slidesPerView={2}
breakpoints={{
768:{slidesPerView:3},
1024:{slidesPerView:5}
}}
loop={true}
autoplay={{delay:2000}}
>

<SwiperSlide>
<img src="/images/google.png" className="h-12 mx-auto"/>
</SwiperSlide>

<SwiperSlide>
<img src="/images/microsoft.png" className="h-12 mx-auto"/>
</SwiperSlide>

<SwiperSlide>
<img src="/images/amazon.png" className="h-12 mx-auto"/>
</SwiperSlide>

<SwiperSlide>
<img src="/images/salesforce.png" className="h-12 mx-auto"/>
</SwiperSlide>

<SwiperSlide>
<img src="/images/cisco.png" className="h-12 mx-auto"/>
</SwiperSlide>

</Swiper>

</section>

  )

}