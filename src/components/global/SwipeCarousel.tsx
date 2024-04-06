import React, { useState, SetStateAction, Dispatch, useEffect }from "react";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 8;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const SwipeCarousel = ({ images } : {images: string[]}) => {
  const [dragging, setDragging] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);
  const dragXProgress = useMotionValue(0);

  useMotionValueEvent(dragX, "change", (latest) => {
      if(typeof latest === "number" && dragging) {
        dragXProgress.set(latest);
      } else {
        dragXProgress.set(0);
      }
  })

  useEffect(() => {
      const intervalRef = setInterval(() => {
      const x = dragXProgress.get();

      if(x === 0) {
        setImgIndex(pv => {
          if (pv === images.length - 1) {
            return 0;
          }
          return pv + 1;
        })
      }
      }, AUTO_DELAY);

      return () => clearInterval(intervalRef)
  }, [])

  const onDragStart = () => {
    setDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);

    const x = dragX.get();

    if(x <= -DRAG_BUFFER && imgIndex < images.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if(x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden py-8">
      <motion.div 
      drag="x"
      dragConstraints={{
        left:0,
        right:0,
      }}
      style={{
        x: dragX,
      }}
      animate={{
        translateX: `-${imgIndex * 100}%`,
      }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      transition = {SPRING_OPTIONS}
      className="flex items-center cursor-grab active:cursor-grabbing">
        <Images imgIndex={imgIndex} images={images}/>
      </motion.div>
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} images={images}/>
    </div>
  );
};

const Images = ({imgIndex, images} : {imgIndex: number; images: string[]}) => {
  return (
    <>
    {images.map((imgSrc, idx) => {
      return (
            <motion.div 
              key={idx}
              style = {{
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: '100% 100%', 
                backgroundPosition: 'center',
                maxWidth: '100%', // Definindo largura máxima
                maxHeight: '100%', // Definindo altura máxima
              }}
              animate={{
                scale: imgIndex === idx ? 1.0 : 0.85,
              }}
              transition = {SPRING_OPTIONS}
              className="w-full h-96 shrink-0 rounded-xl object-cover"
            />
      );
    })}
    </>
  )
}

const Dots = ({imgIndex, setImgIndex, images} : {
  imgIndex: number; 
  setImgIndex: Dispatch<SetStateAction<number>>;
  images: string[];
  }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-6">
        {images.map((_,idx) => {
          return <button
          key={idx}
          onClick={() => setImgIndex(idx)}
          className={`h-3 w-3 rounded-full transition-colors ${
            idx === imgIndex ? "bg-black bg-opacity-100" : "bg-black bg-opacity-20"
          }`}
          />
        })}
    </div>
  );
}

export default SwipeCarousel;