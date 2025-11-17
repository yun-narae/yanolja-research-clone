import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import VisualHighlightCard from './VisualHighlightCard';
import { visualHighlightData } from '../../../data/visualHighlightData';

export default function VisualHighlightCardList() {
    const [isPlaying, setIsPlaying] = useState(true);
    const swiperRef = useRef(null);
    return (
        <article className="w-full relative overflow-hidden desktop:overflow-visible flex flex-col items-center 
        desktop:w-[calc(77%-60px)] desktop:shrink-0
        ">
            <h3 className="sr-only">야놀자 배너</h3>
            <div className="swiper-container-wrapper w-full">
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    style={{ width: '100%' }}
                    modules={[Navigation, Pagination, Autoplay, EffectCards]}
                    effect="cards"
                    cardsEffect={{
                        perSlideOffset: 8,
                        perSlideRotate: 0,
                        rotate: false,
                        slideShadows: true,
                    }}
                    spaceBetween={0}
                    slidesPerView={1}
                    speed={400}
                    watchSlidesProgress={true}
                    navigation={{
                        prevEl: '.swiper-button-prev-custom',
                        nextEl: '.swiper-button-next-custom',
                    }}
                    pagination={{
                        el: '.swiper-pagination-custom',
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet-custom',
                        bulletActiveClass: 'swiper-pagination-bullet-active-custom',
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="visual-highlight-swiper main_swiper_pc swiper-cards swiper-3d"
                >
                    {visualHighlightData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <VisualHighlightCard data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            
            {/* 커스텀 네비게이션 및 페이지네이션 */}
            <div className="flex items-center justify-center gap-4 mt-6">
                <button
                    type="button"
                    className="swiper-button-prev-custom w-8 h-8 flex items-center justify-center cursor-pointer text-gray-500"
                    aria-label="이전 슬라이드"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15 18L9 12L15 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <div className="swiper-pagination-custom flex items-center gap-2"></div>
                <button
                    type="button"
                    onClick={() => {
                        if (swiperRef.current) {
                            swiperRef.current.autoplay.start();
                            setIsPlaying(true);
                        }
                    }}
                    className="w-8 h-8 flex items-center justify-center cursor-pointer text-black"
                    aria-label="재생"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 5V19L19 12L8 5Z"
                            fill="currentColor"
                        />
                    </svg>
                </button>
                <button
                    type="button"
                    onClick={() => {
                        if (swiperRef.current) {
                            swiperRef.current.autoplay.stop();
                            setIsPlaying(false);
                        }
                    }}
                    className="w-8 h-8 flex items-center justify-center cursor-pointer text-black"
                    aria-label="일시정지"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 6H8V18H10V6Z"
                            fill="currentColor"
                        />
                        <path
                            d="M16 6H14V18H16V6Z"
                            fill="currentColor"
                        />
                    </svg>
                </button>
                <button
                    type="button"
                    className="swiper-button-next-custom w-8 h-8 flex items-center justify-center cursor-pointer text-gray-500"
                    aria-label="다음 슬라이드"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9 18L15 12L9 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </article>
    );
}

