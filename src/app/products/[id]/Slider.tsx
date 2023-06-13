"use client";

import { AnimatePresence, motion, wrap } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FC, useState } from "react";

interface SliderProps {
  images: string[];
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Slider: FC<SliderProps> = ({ images }) => {
  const [[page, direction], setPage] = useState<number[]>([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const imageIndex = wrap(0, images.length, page);

  console.log(imageIndex);
  return (
    <div className="relative w-full h-full flex overflow-hidden">
      <button
        className="absolute top-5 left-5 z-20 bg-white rounded-full"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft />
      </button>
      <button
        className="absolute top-5 right-5 z-20 bg-white rounded-full"
        onClick={() => paginate(1)}
      >
        <ChevronRight />
      </button>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          loading="eager"
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
    </div>
  );
};

export default Slider;
