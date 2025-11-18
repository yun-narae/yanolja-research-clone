import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TrendReportCard from './TrendReportCard';
import { trendReportData } from '../../../data/trendReportData';
import SvgIcon from '../../SvgIcon/SvgIcon';
import SectionTitle from '../../SectionTitle/SectionTitle';

export default function TrendReportCardList() {
    const swiperRef = useRef(null);

    return (
        <article className="w-full">
            <h3 className="sr-only">동향보고서 카드 목록</h3>
            <SectionTitle 
                title="동향보고서"
                showArrow={true}
                href="/trends"
            />
            <div className="swiper-container-wrapper w-full relative tablet:h-fit">
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    style={{ width: '100%' }}
                    modules={[Navigation, Pagination, Scrollbar]}
                    spaceBetween={16}
                    slidesPerView={3.5}
                    scrollbar={{
                        el: '.trend-swiper-scrollbar',
                        draggable: true,
                        hide: false,
                    }}
                    breakpoints={{
                        769: {
                            slidesPerView: 1,
                            freeMode: false,
                            scrollbar: {
                                hide: true,
                            },
                        }
                    }}
                    speed={400}
                    freeMode={true}
                    watchSlidesProgress={true}
                    navigation={{
                        prevEl: '.trend-swiper-button-prev',
                        nextEl: '.trend-swiper-button-next',
                    }}
                    pagination={{
                        el: '.trend-swiper-pagination',
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet-custom',
                        bulletActiveClass: 'swiper-pagination-bullet-active-custom',
                    }}
                    className="trend-swiper"
                    role="list"
                    aria-label="동향보고서 카드 목록"
                >
                    {trendReportData.map((item) => (
                        <SwiperSlide key={item.id} role="listitem">
                            <TrendReportCard data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                
                {/* 네비게이션 버튼 - tablet부터 표시 */}
                <button
                    type="button"
                    className="trend-swiper-button-prev hidden tablet:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 p-5 items-center justify-center cursor-pointer text-gray-500 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
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
                    className="trend-swiper-button-next hidden tablet:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 p-5 items-center justify-center cursor-pointer text-gray-500 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
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
            
            {/* 스크롤바 (모바일만) */}
            <div className="trend-swiper-scrollbar tablet:hidden mt-6"></div>
            
            {/* 페이지네이션 (태블릿 이상) */}
            <div className="trend-swiper-pagination swiper-pagination-custom hidden tablet:flex items-center justify-center gap-2 mt-6"></div>
        </article>
    );
}

