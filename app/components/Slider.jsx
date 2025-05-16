import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';

export default function CubeSlider() {
  return (
    <Swiper
      effect="cube"
            loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}

      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide> <img height={"300"} src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
      <SwiperSlide> <img height={"300"} src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
      <SwiperSlide> <img height={"300"} src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide>
      <SwiperSlide> <img  height={"300"} src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide>
    </Swiper>
  );
}
