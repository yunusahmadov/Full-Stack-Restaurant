import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./sliderHeader.css"

import { EffectFade, Navigation, Pagination,Autoplay } from "swiper";
import header1 from '../../images/header1.jpg'
import header2 from '../../images/header2.jpg'
import TextContainer from "./TextContainer";



function SliderHeader() {
  return (
    <div id='home'>
    <Swiper
    spaceBetween={30}
    effect={"fade"}
    navigation={true}
    loop={true}
    autoplay={{
      delay: 5500,
      disableOnInteraction: false,
    }}
    modules={[Autoplay,EffectFade, Navigation, Pagination]}
    className="swiperHeader"
  >
    <SwiperSlide>
      <img src={header1} />
      <TextContainer
      text1={'TASTY AND CRUNCHY'}
      text2={'RESTAURANT'}
      text3={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ab incidunt nostrum cum vel placeat eius maiores a magni? Magni.'}
      />
    </SwiperSlide>
    <SwiperSlide>
    <img src={header2} />
    <TextContainer
      text1={'CRISPY AND SOFT'}
      text2={'DELICIOUS'}
      text3={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ab incidunt nostrum cum vel placeat eius maiores a magni? Magni.'}
      />
    </SwiperSlide>
  </Swiper>
    </div>

  )
}

export default SliderHeader