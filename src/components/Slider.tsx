"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
interface SliderProps {
  image: string[];
}

const Slider: FC<SliderProps> = ({ image }) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      loop
      speed={400}
      slidesPerView={1}
    >
      {image.map((i, index) => (
        <SwiperSlide key={index} className="m-auto h-full p-6">
          <img src={i} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
