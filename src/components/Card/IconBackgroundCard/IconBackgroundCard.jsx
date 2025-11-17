import SvgIcon from "../../SvgIcon/SvgIcon";
import { iconBackgroundData } from "../../../data/iconBackgroundData";

export default function IconBackgroundCard({ data }) {
    const cardData = data || iconBackgroundData[0];
    
    const bgColor = cardData.id === 'brand-asset-index' 
        ? 'bg-(--color-orange-2)' 
        : 'bg-(--color-orange-1)';

    return (
        <li  
            role="listitem"
            className={`group relative rounded-xl tablet:rounded-2xl ${bgColor} transition-all duration-300 ease-in-out tablet:hover:shadow-lg tablet:hover:shadow-black/20 flex-1 flex mobile:min-w-0`}
        >
            <a 
                href={cardData.href}
                role="link"
                tabIndex="0"
                className="
                    relative flex flex-col items-start justify-between w-full h-full overflow-hidden
                    p-4 tablet:p-6
                    rounded-xl tablet:rounded-2xl cursor-pointer
                "
            >
                {/* 배경 아이콘 */}
                <div className="absolute bottom-0 right-0 z-0 pointer-events-none">
                    <img 
                        src={cardData.iconSrc}
                        alt=""
                        className="w-[90px] h-[90px] group-hover:w-[100px] group-hover:h-[100px] transition-all duration-300 ease-in-out"
                        aria-hidden="true"
                    />
                </div>

                {/* 콘텐츠 */}
                <div className="relative flex flex-col gap-1 tablet:gap-2">
                    <h4 className="text-white font-bold text-base tablet:text-xl">
                        {cardData.title}
                    </h4>
                    <div className="flex items-center gap-1 opacity-[0.6]">
                        <span className="text-white text-xs tablet:text-sm">
                            {cardData.linkText}
                        </span>
                        <div className="w-3 h-3 tablet:w-[15px] tablet:h-3.5 pointer-events-none">
                            <SvgIcon
                                iconName="arrow_right"
                                width={15}
                                height={14}
                                className="w-full h-full"
                                style={{ filter: "brightness(0) invert(1)" }}
                            />
                        </div>
                    </div>
                </div>
            </a>
        </li>
    );
}

