import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Navigation, Pagination, FreeMode } from "swiper"
/** Import Swiper styles */
import 'swiper/swiper-bundle.css'
import 'swiper/swiper-element.min.css'

const slides = [
    { id: 1, imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%A3%E0%B8%A7%E0%B8%87%E0%B8%AA%E0%B8%B2%E0%B8%98%E0%B8%B2%E0%B8%A3%E0%B8%93%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88.png' },
    { id: 2, imgUrl: 'https://upload.wikimedia.org/wikipedia/th/7/7c/Logo-thaihealth_Thai_with_Text.png' },
    { id: 3, imgUrl: 'https://www2.nakhonratchasima.go.th/images/content/logo-102-1/pic.png' },
    { id: 4, imgUrl: 'https://www.jobbkk.com/upload/variety/goverment/20160401_3104.png' },
    { id: 5, imgUrl: 'https://upload.wikimedia.org/wikipedia/th/thumb/c/ca/Opdc.JPG/1200px-Opdc.JPG' },
]

export default function SlideLogos() {
    SwiperCore.use([Autoplay])

    return (
        <div className="h-full py-5">
            <Swiper
                modules={[FreeMode]}
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                autoplay={{
                    delay: 2000
                }}
            >
                {slides.map(slide => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-[200px] flex flex-row justify-center">
                            <picture>
                                <img src={slide.imgUrl} alt="logo" className="h-full w-auto" />
                            </picture>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
