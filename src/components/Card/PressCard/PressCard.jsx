export default function PressCard({ data }) {
    const cardData = data;

    return (
        <li className="relative">
            <a 
                href={cardData.href} 
                className="block w-full cursor-pointer group"
                role="link"
                tabIndex="0"
                aria-label={`${cardData.source}: ${cardData.title} - ${cardData.date}`}
            >
                <div className="flex items-start justify-between gap-3 py-[12px] group-hover:bg-(--color-gray-bg-palest) transition-colors">
                    <div className="flex-1 min-w-0">
                        <h4 className="text-(--color-text-primary) text-[16px] tablet:text-base font-medium line-clamp-3 group-hover:underline text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] leading-[28px] tracking-[-0.4px]">
                            <span className="mr-1">
                                [{cardData.source}]
                            </span>
                            {cardData.title}
                        </h4>
                    </div>
                    <small className="text-(--color-gray-300) text-[14px] tablet:text-sm whitespace-nowrap flex-shrink-0">
                        {cardData.date}
                    </small>
                </div>
            </a>
        </li>
    );
}

