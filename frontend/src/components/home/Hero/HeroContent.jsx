import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
// import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { HOME_DATA } from "../../../constant/home/homeData";

const Hero = () => {
    return (
        <section className="relative h-screen">

            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                effect="fade"
                loop
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
                        <div
                            className="relative h-screen bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                            }}
                        >
                            {/* Overlay */}

                            <div className="absolute inset-0 bg-black/55" />

                            {/* Content */}

                            <div className="container relative z-20 flex h-full items-center justify-center px-4">
                                <div className="max-w-5xl text-center text-white">

                                    {/* Subtitle */}
                                    <span className="mb-3 block text-xs font-semibold uppercase tracking-[3px] text-secondary sm:text-sm sm:tracking-[4px] md:text-base lg:text-lg lg:tracking-[5px]">
                                        {slide.subtitle}
                                    </span>

                                    {/* Heading */}
                                    <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                                        {slide.title}
                                    </h1>

                                    {/* Description */}
                                    <p className="mx-auto max-w-3xl text-sm leading-7 text-white/90 sm:text-base md:text-lg lg:text-xl">
                                        {slide.description}
                                    </p>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Hero;