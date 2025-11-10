import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// images
import Banner1 from '../../../../assets/images/banner1.png';
import Banner2 from '../../../../assets/images/banner2.png';
import Banner3 from '../../../../assets/images/banner3.png';

const Slider = () => {
  const images = [Banner1, Banner2, Banner3];

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={1}   // ✅ 'slidesPerView' (not slidePerView)
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {images.map((d, i) => (
        <SwiperSlide key={i}>   {/* ✅ capital 'S' in SwiperSlide */}
          <img
            src={d}
            alt="bannerimages"
            style={{ height: '500px', width: '100%', objectFit: 'cover' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
