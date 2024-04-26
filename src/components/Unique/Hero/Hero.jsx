// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: 'Slider - 1',
      description: 'This is the slide 01, I will change the text later. This is the slide 01, I will change the text later',
      img: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: 'Slider - 2',
      description: 'This is the slide 02, I will change the text later, This is the slide 02, I will change the text later',
      img: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: 'Slider - 3',
      description: 'This is the slide 03, I will change the text later, This is the slide 03, I will change the text later',
      img: "https://images.pexels.com/photos/713661/pexels-photo-713661.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      title: 'Slider - 4',
      description: 'This is the slide 04, I will change the text later. This is the slide 04, I will change the text later',
      img: "https://images.pexels.com/photos/3942931/pexels-photo-3942931.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <section className="container mx-auto px-4">
      <Swiper 
      navigation={true} 
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
        modules={[Navigation, Autoplay]} 

      className="mySwiper ">
        {slides?.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div style={{backgroundImage:`url(${slide.img})`}}
            className="bg-cover bg-center bg-no-repeat lg:h-[70vh] h-[50vh] flex justify-center items-center text-white"
            >
             <div className="max-w-xl text-center px-5">
             <h2 className="font-bold text-2xl">{slide.title}</h2>
              <p>{slide.description}</p>
             </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
