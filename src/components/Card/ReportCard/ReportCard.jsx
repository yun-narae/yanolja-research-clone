import { reportData } from "../../../data/reportData";

export default function ReportCard({ data }) {
    const cardData = data || reportData[0];

    return (
        <article className="relative w-auto flex-shrink-0">
            <a 
                href={cardData.href} 
                className="block relative w-full cursor-pointer group"
                role="link"
                tabIndex="0"
                aria-label={`${cardData.title} - ${cardData.date}`}
            >
                <div className="flex flex-col w-full transition-shadow">
                    {/* 이미지 영역 */}
                    <div className="relative w-full aspect-[2/3] group-hover:shadow-xl transition">
                        <img
                            src={cardData.image}
                            alt={cardData.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                    {/* 콘텐츠 영역 */}
                    <div className="group flex flex-col items-start mt-5 tablet:mt-[18px]">
                        {/* 날짜 */}
                        <small className="text-(--color-gray-200) font-medium text-xs tablet:text-sm">
                            {cardData.date}
                        </small>
                    </div>
                </div>
            </a>
        </article>
    );
}

