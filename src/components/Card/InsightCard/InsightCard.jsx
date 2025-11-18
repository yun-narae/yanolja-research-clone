import { insightData } from "../../../data/insightData";

export default function InsightCard({ data }) {
    const cardData = data || insightData[1];

    return (
        <article className="relative w-auto flex-shrink-0">
            <a 
                href={cardData.href} 
                className="block relative w-full cursor-pointer group"
                role="link"
                tabIndex="0"
                aria-label={`${cardData.category}: ${cardData.title}`}
            >
                <div className="flex flex-col w-full overflow-hidden bg-white">
                    {/* 이미지 영역 */}
                    <div className="relative w-full aspect-[3/2] overflow-hidden rounded-[20px]">
                        <img
                            src={cardData.image}
                            alt={cardData.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    
                    {/* 콘텐츠 영역 */}
                    <div className="group flex flex-col items-start mt-5 tablet:mt-[18px]">
                        {/* 카테고리 */}
                        <div className="mb-1 tablet:mb-4">
                            <span className="text-(--color-orange-1) text-[14px] tablet:text-sm font-semibold">
                                {cardData.category}
                            </span>
                        </div>
                        
                        {/* 제목 */}
                        <h4 className="text-(--color-text-primary) text-[18px] tablet:text-[20px] font-medium mb-3 tablet:mb-4 line-clamp-3 group-hover:underline text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] leading-[28px] tracking-[-0.4px]">
                            {cardData.title}
                        </h4>
                        
                        {/* 날짜 */}
                        <small className="text-(--color-gray-300) text-xs tablet:text-sm">
                            {cardData.date}
                        </small>
                    </div>
                </div>
            </a>
        </article>
    );
}

