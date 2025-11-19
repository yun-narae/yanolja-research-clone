import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ReportCard from './ReportCard';
import { reportData } from '../../../data/reportData';
import SvgIcon from '../../SvgIcon/SvgIcon';
import SectionTitle from '../../SectionTitle/SectionTitle';
import ReportCardSkeleton from '../../Skeleton/ReportCardSkeleton';

export default function ReportCardList() {
    const swiperRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <article className="w-full max-w-[1290px] mx-auto pl-[20px] py-[56px] tablet:py-[80px] tablet:px-[15px]">
            <h3 className="sr-only">연구보고서 카드 목록</h3>
            <SectionTitle 
                title="연구보고서"
                showArrow
            />
            <div className="swiper-container-wrapper w-full relative">
                {isLoading ? (
                    <div className="flex gap-4 overflow-hidden">
                        {Array.from({ length: 1 }).map((_, index) => (
                            <ReportCardSkeleton key={`skeleton-${index}`} />
                        ))}
                    </div>
                ) : (
                    <>
                    <Swiper
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        style={{ width: '100%' }}
                        modules={[Navigation, Pagination, Scrollbar]}
                        spaceBetween={16}
                        slidesPerView={1.5}
                        breakpoints={{
                            480: {
                                slidesPerView: 3.2,
                            },
                            769: {
                                slidesPerView: 4.5,
                            }
                        }}
                        speed={400}
                        freeMode={true}
                        watchSlidesProgress={true}
                        navigation={{
                            prevEl: '.report-swiper-button-prev',
                            nextEl: '.report-swiper-button-next',
                        }}
                        scrollbar={{
                            el: '.report-swiper-scrollbar',
                            draggable: true,
                        }}
                        className="report-swiper"
                        role="list"
                        aria-label="연구보고서 카드 목록"
                    >
                        {reportData.map((item) => (
                            <SwiperSlide key={item.id} role="listitem">
                                <ReportCard data={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    
                    {/* 네비게이션 버튼 - tablet부터 표시 */}
                    <button
                    type="button"
                    className="report-swiper-button-prev hidden tablet:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 p-5 items-center justify-center cursor-pointer text-gray-500 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
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
                    className="report-swiper-button-next hidden tablet:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 p-5 items-center justify-center cursor-pointer text-gray-500 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                    aria-label="다음 슬라이드"
                >
                    <SvgIcon 
                        iconName="icon_arrow_right" 
                        width={15} 
                        height={14}
                        className="text-current"
                    />
                </button>
                    </>
                )}
            </div>
            
            {/* 스크롤바 */}
            {!isLoading && (
                <div className="report-swiper-scrollbar mt-[36px] tablet:mt-[50px]"></div>
            )}
        </article>
    );
}

