// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "../Slick-Slider/Slider";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const SwiperSlider = () => {
  const displayImages = images.map((img, i) => (
    <SwiperSlide className="single-slide">
      <img src={img} alt="slider" key={i} />
    </SwiperSlide>
  ));
  return (
    <section className="swiper-slider">
      <Swiper
        effect={"coverflow"}
        spaceBetween={10}
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
          },
          "@0.75": {
            slidesPerView: 1,
          },
          "@1.00": {
            slidesPerView: 3,
          },
          "@1.50": {
            slidesPerView: 3,
          },
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}>
        {displayImages}
      </Swiper>
    </section>
  );
};

export default SwiperSlider;
