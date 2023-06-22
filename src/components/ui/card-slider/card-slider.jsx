import React, { useRef, useState } from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import SwiperCore, { Navigation, Thumbs } from "swiper/core";
import {
  StyledSwiper,
  StyledSlide,
  StyledButtonLeft,
  StyledButtonRight,
  SlidesNum
} from "./styled";

SwiperCore.use([Navigation, Thumbs]);

export default function Slider({ images, title }) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(1);

  const sliderNextHandler = () => {
    setCurrentSlide(
      currentSlide > images.length ? images.length : currentSlide + 1
    );
  };

  const sliderPrevHandler = () => {
    setCurrentSlide(currentSlide < images.length ? 1 : currentSlide - 1);
  };

  return (
    <>
      <StyledSwiper
        spaceBetween={0}
        allowTouchMove={false}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        onSlideNextChange={sliderNextHandler}
        onSlidePrevChange={sliderPrevHandler}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <StyledSlide src={image.src} width={248} height={248} alt={title} />
          </SwiperSlide>
        ))}
        <StyledButtonLeft onClick={sliderPrevHandler} ref={navigationPrevRef}>
          &#8249;
        </StyledButtonLeft>
        <StyledButtonRight onClick={sliderNextHandler} ref={navigationNextRef}>
          &#8250;
        </StyledButtonRight>
        <SlidesNum>
          {currentSlide} / {images.length}
        </SlidesNum>
      </StyledSwiper>
    </>
  );
}
