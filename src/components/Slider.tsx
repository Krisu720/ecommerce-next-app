"use client";
import { FC } from "react";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
interface SliderProps {
  image: string[];
}

const Slider: FC<SliderProps> = ({ image }) => {
  return <div className="relative h-full w-full overflow-hidden"></div>;
};

export default Slider;
