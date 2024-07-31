import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import bag1 from '../../../assets/lal9.jpg'
import bag2 from '../../../assets/lal8.jpg'
import bag3 from '../../../assets/lal11.jpg'


const Cataswip = () => {
  
    return (
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={bag1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={bag2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={bag3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={bag1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={bag2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={bag3} alt="" /></SwiperSlide>
        {/* <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    );
};

export default Cataswip;