import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
// Import Swiper styles
import 'swiper/swiper-bundle.css'

export default function SlideHeros() {
    SwiperCore.use([Autoplay])

    return (
        <section className="bg-white mb-4 rounded-bl-xl rounded-br-xl overflow-hidden" style={{ minHeight: '362px' }}>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2000
                }}
            >
                <SwiperSlide><Slide title="Slide 1" /></SwiperSlide>
                <SwiperSlide><Slide title="Slide 2" /></SwiperSlide>
                <SwiperSlide><Slide title="Slide 3" /></SwiperSlide>
                <SwiperSlide><Slide title="Slide 4" /></SwiperSlide>
            </Swiper>
        </section>
    )
}

function Slide({ title, ...props }: { title: string }) {
    return (
        <div className="relative" style={{ height: '362px' }}>
            <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                className="w-full h-full"
                alt="image"
            />
            <div className="absolute bottom-0 px-4 py-4 bg-gray-100 opacity-30 w-full">
                <h1>{title}</h1>
            </div>
        </div>
    )
}