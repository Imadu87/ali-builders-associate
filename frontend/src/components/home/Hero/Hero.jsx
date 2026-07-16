import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import HeroSlide from "./HeroSlide";
import HeroNavigation from "./HeroNavigation";
import { HOME_DATA } from "../../../constant/home/homeData";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">

      <Swiper
        modules={[EffectFade, Autoplay, Navigation]}
        effect="fade"
        loop={true}
        speed={1200}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        className="h-full"
      >
        {HOME_DATA.hero.map((slide) => (
          <SwiperSlide key={slide.id}>
            <HeroSlide slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <HeroNavigation />

    </section>
  );
};

export default Hero;