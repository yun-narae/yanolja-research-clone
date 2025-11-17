import { visualHighlightData } from "../../../data/visualHighlightData";

export default function VisualHighlightCard({ data }) {
    const cardData = data || visualHighlightData[0];

    return (
        <article className="relative w-full h-[280px] tablet:h-[350px]">
            <a href={cardData.href} className="block relative w-full h-full cursor-default">
                <div className="relative w-full h-full overflow-hidden rounded-[20px] tablet:rounded-[30px]">
                    {/* 배경 이미지 */}
                    <img
                        src={cardData.image}
                        alt={cardData.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    
                    {/* 오버레이 및 콘텐츠 */}
                    <div className="absolute inset-0 flex flex-col items-start justify-between px-[40px] py-[30px] laptop:py-[60px] bg-black/30">
                        {/* 카테고리 */}
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white" aria-hidden="true" />
                            <span className="text-[14px] tablet:text-[18px] font-medium text-white">
                                {cardData.category}
                            </span>
                        </div>
                        
                        {/* 제목 */}
                        <h4 className="text-[20px] text-[28px] tablet:text-[44px] font-bold leading-tight text-white">
                            {cardData.title}
                        </h4>
                        
                        {/* 버튼 */}
                        <button
                            type="button"
                            className="font-semibold text-white rounded-full px-4 py-2 text-sm tablet:px-5 tablet:py-3 tablet:text-base tablet:px-[50px] tablet:py-5 bg-(--color-black-dark) hover:bg-(--color-gray-dark) cursor-pointer transition"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = cardData.href;
                            }}
                        >
                            자세히보기
                        </button>
                    </div>
                </div>
            </a>
        </article>
    );
}

