import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
/** Import Swiper styles */
import 'swiper/swiper-bundle.css'

const slides = [
    { id: 1, title: 'Slide 1', imgUrl: 'https://dmh.go.th/images/slides/No%20Gift%20Policy.jpg?1676045301402' },
    { id: 2, title: 'Slide 2', imgUrl: '/thumbnail_1c30ffd49c597aa9cd42af147a04514b.png' },
    { id: 3, title: 'Slide 3', imgUrl: '/thumbnail_c550f9c85b119149e89b2ada124649b8.png' },
    { id: 4, title: 'Slide 4', imgUrl: 'https://anamai.moph.go.th/2000x475//web-upload/1xff0d34e409a13ef56eea54c52a291126/202012/m_banner/102/thumbnail_02d898628c354f66ab187598699daf44.png?q=80&co=9' },
]

export default function SlideHeros() {
    SwiperCore.use([Autoplay])

    return (
        <section className="bg-white overflow-hidden" style={{ minHeight: '362px' }}>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2000
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <Slide slide={slide} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

function Slide({ slide, ...props }: { slide: any }) {
    return (
        <div className="relative" style={{ height: '475px' }}>
            <img src={slide.imgUrl} className="w-full h-full" alt="image" />
            <div className="absolute bottom-0 px-4 py-4 bg-gray-100 opacity-30 w-full">
                <h1>{slide.title}</h1>
            </div>
        </div>
    )
}