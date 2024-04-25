// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Hero = () => {
  const slides = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/713661/pexels-photo-713661.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/3942931/pexels-photo-3942931.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <section>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper max-w-[90%]">
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img className="block w-[100%] lg:h-[70vh] h-[50vh] object-cover" src={slide.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
