import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import VisualHighlightCard from './VisualHighlightCard';
import { visualHighlightData } from '../../../data/visualHighlightData';
import SvgIcon from '../../SvgIcon/SvgIcon';

export default function VisualHighlightCardList() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
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
                        // 초기 인덱스 설정
                        setActiveIndex(swiper.realIndex);
                    }}
                    onSlideChange={(swiper) => {
                        // 슬라이드 변경 시 활성 인덱스 업데이트
                        const realIndex = swiper.realIndex;
                        setActiveIndex(realIndex);
                    }}
                    style={{ width: '100%' }}
                    modules={[Navigation, Autoplay, EffectCards]}
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
                    pagination={false}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    loopAdditionalSlides={visualHighlightData.length}
                    className="visual-highlight-swiper main_swiper_pc swiper-cards swiper-3d"
                    role="list"
                    aria-label="야놀자 배너 카드 목록"
                >
                    {visualHighlightData.map((item) => (
                        <SwiperSlide key={item.id} role="listitem">
                            <VisualHighlightCard data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            
            {/* 커스텀 네비게이션 및 페이지네이션 */}
            <div className="flex items-center justify-center gap-2 mt-6">
                <button
                    type="button"
                    className="swiper-button-prev-custom w-8 h-8 flex items-center justify-center cursor-pointer text-gray-500"
                    aria-label="이전 슬라이드"
                >
                    <SvgIcon 
                        iconName="icon_arrow_left" 
                        width={15} 
                        height={14}
                        className="text-current"
                    />
                </button>
                <div className="swiper-pagination-custom flex items-center gap-2">
                    {visualHighlightData.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => {
                                if (swiperRef.current) {
                                    swiperRef.current.slideToLoop(index);
                                }
                            }}
                            className={`swiper-pagination-bullet-custom ${
                                activeIndex === index ? 'swiper-pagination-bullet-active-custom' : ''
                            }`}
                            aria-label={`슬라이드 ${index + 1}로 이동`}
                        />
                    ))}
                </div>
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
                    <SvgIcon 
                        iconName="icon_play" 
                        width={9} 
                        height={10}
                        className="text-current"
                    />
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
                    <SvgIcon 
                        iconName="icon_pause" 
                        width={8} 
                        height={10}
                        className="text-current"
                    />
                </button>
                <button
                    type="button"
                    className="swiper-button-next-custom w-8 h-8 flex items-center justify-center cursor-pointer text-gray-500"
                    aria-label="다음 슬라이드"
                >
                    <SvgIcon 
                        iconName="icon_arrow_right" 
                        width={15} 
                        height={14}
                        className="text-current"
                    />
                    
                </button>
            </div>
        </article>
    );
}

