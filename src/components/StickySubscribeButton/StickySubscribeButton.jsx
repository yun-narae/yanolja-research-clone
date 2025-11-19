import SvgIcon from '../SvgIcon/SvgIcon';

export default function StickySubscribeButton() {
    return (
        <div className="fixed -right-[42px] bottom-[120px] z-50 -rotate-90">
            <a 
                href="/"
                aria-label="구독신청하기"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row-reverse gap-2 items-center justify-center bg-(--color-orange-1) text-white px-[20px] py-[10px] rounded-t-[8px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-(--color-orange-2) hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)] transition-all duration-300 "
            >

                구독신청
                {/* <div className="flex items-center justify-center w-[16px] h-[64px]">
                    <span className=" text-[16px] font-medium leading-tight whitespace-nowrap">
                        
                    </span>
                </div> */}

                {/* 아이콘 */}
                <div className="w-[28px] h-[28px] flex items-center justify-center bg-white rounded-full flex-shrink-0">
                    <SvgIcon
                        iconName="icon_bell"
                        width={18}
                        height={18}
                        className="text-(--color-orange-1)"
                    />
                </div>
            </a>
        </div>
    );
}
