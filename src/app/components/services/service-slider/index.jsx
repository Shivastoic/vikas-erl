"use client"

// SWIPER IMPORT 
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/bundle"
import "swiper/css/autoplay"

// Import Swiper modules
import { Autoplay, Navigation } from "swiper/modules";
import ServiceCard from "@/app/components/services/card/index"

export default function ServiceSlider({ slider_data }) {

    return (

        <Swiper
            className="mySwiper !py-4"
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            navigation={{
                prevEl: ".custom-swiper-button-prev",
                nextEl: ".custom-swiper-button-next",
            }}
            spaceBetween={20}
            breakpoints={{
                0: {
                    slidesPerView: 1, // 1 slide for mobile devices
                },
                600: {
                    slidesPerView: 2, // 1.5 slides for screens wider than 600px
                },
                1024: {
                    slidesPerView: 3, // 2 slides for screens wider than 1024px
                },
                1280: {
                    slidesPerView: 4, // 3 slides for screens wider than extra large (1280px)
                },
            }}
        >
            {
                slider_data.map((data, index) => (
                    <SwiperSlide key={index}>
                        <ServiceCard 
                            icon={ data.icon }
                            title={ data.title }
                            description={ data.description }
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>

    )
}