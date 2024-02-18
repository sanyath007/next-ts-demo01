import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
/** Import Swiper styles */
import 'swiper/swiper-bundle.css'
import slides from '../../data/hero-slides.json' 

export default function SlideHeros() {
    SwiperCore.use([Autoplay])

    return (
        <div className="hero-wrapper">
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2000
                }}
                style={{ height: '100%' }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <Slide slide={slide} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

function Slide({ slide, ...props }: { slide: any }) {
    return (
        <div className="slide-wrapper">
            <img src={slide.imgUrl} alt="image" />
            {/* <div className="absolute bottom-0 px-4 py-4 bg-gray-100 opacity-30 w-full">
                <h1>{slide.title}</h1>
            </div> */}
        </div>
    )
}