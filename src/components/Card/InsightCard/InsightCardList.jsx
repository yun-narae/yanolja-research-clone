import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import InsightCard from './InsightCard';
import { insightData } from '../../../data/insightData';
import SvgIcon from '../../SvgIcon/SvgIcon';
import SectionTitle from '../../SectionTitle/SectionTitle';

export default function InsightCardList() {
    const swiperRef = useRef(null);

    return (
        <article className="w-full">
            <h3 className="sr-only">인사이트 / 브리프 카드 목록</h3>
            <SectionTitle 
                title="인사이트 / 브리프"
                showArrow
            />
            <div className="swiper-container-wrapper w-full relative">
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    style={{ width: '100%' }}
                    modules={[Navigation, Pagination, Scrollbar]}
                    spaceBetween={16}
                    slidesPerView={1.5}
                    breakpoints={{
                        769: {
                            slidesPerView: 2.5,
                        },
                        1024: {
                            slidesPerView: 3.5,
                        }
                    }}
                    speed={400}
                    freeMode={true}
                    watchSlidesProgress={true}
                    navigation={{
                        prevEl: '.insight-swiper-button-prev',
                        nextEl: '.insight-swiper-button-next',
                    }}
                    scrollbar={{
                        el: '.insight-swiper-scrollbar',
                        draggable: true,
                    }}
                    className="insight-swiper"
                >
                    {insightData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <InsightCard data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                
                {/* 네비게이션 버튼 - tablet부터 표시 */}
                <button
                    type="button"
                    className="insight-swiper-button-prev hidden tablet:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 p-5  items-center justify-center cursor-pointer text-gray-500 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                    aria-label="이전 슬라이드"
                >
                    <SvgIcon 
                        iconName="icon_arrow_left" 
                        width={15} 
                        height={14}
                        className="text-current"
                    />
                </button>
                <button
                    type="button"
                    className="insight-swiper-button-next hidden tablet:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 p-5 items-center justify-center cursor-pointer text-gray-500 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
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
            
            {/* 스크롤바 */}
            <div className="insight-swiper-scrollbar mt-6"></div>
        </article>
    );
}

