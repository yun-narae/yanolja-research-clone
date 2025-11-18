import { trendReportData } from "../../../data/trendReportData";

export default function TrendReportCard({ data }) {
    const cardData = data || trendReportData[0];

    return (
        <article className="relative">
            <a 
                href={cardData.href} 
                className="block relative w-full cursor-pointer group"
                role="link"
                tabIndex="0"
                aria-label={`${cardData.title} - ${cardData.date}`}
            >
                <div className="relative w-full aspect-[1.425/2] tablet:aspect-[1/1.4] overflow-hidden rounded-[20px] tablet:rounded-[30px]">
                    {/* 배경 이미지 */}
                    <img
                        src={cardData.image}
                        alt={cardData.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* 어두운 오버레이 및 콘텐츠 */}
                    <div className="absolute inset-0 flex flex-col items-start justify-end p-[20px] tablet:px-[28px] tablet:py-[30px] bg-black/50">
                        {/* 제목 */}
                        <h4 className="text-white text-[16px] tablet:text-[20px] font-medium leading-tight mb-4 tablet:mb-6">
                            {cardData.title}
                        </h4>
                        
                        {/* 날짜 */}
                        <small className="text-white text-[0.875rem] tablet:text-base">
                            {cardData.date}
                        </small>
                    </div>
                </div>
            </a>
        </article>
    );
}

