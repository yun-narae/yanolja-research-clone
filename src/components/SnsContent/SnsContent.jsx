import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import { snsData } from '../../data/snsData';
import SvgIcon from '../SvgIcon/SvgIcon';

export default function SnsContent() {
    const [ref, isVisible] = useScrollFadeIn();

    return (
        <section 
            ref={ref}
            className={`w-full bg-(--color-bg-yellow-light) ${isVisible ? 'fade-in-up' : 'fade-in-up-hidden'}`}
        >
            <h2 className="sr-only">SNS 구독</h2>
            
            <div className="flex flex-col tablet:flex-row items-center tablet:items-center justify-center gap-[40px] tablet:gap-auto max-w-[1290px] mx-auto px-[20px] pt-[70px] pb-[90px] ">
                {/* 텍스트 및 아이콘 영역 */}
                <div className="flex-1 flex flex-col items-center tablet:items-start">
                    <h3 className="w-full text-(--color-text-primary) text-[2rem] font-semibold mb-[26px] text-center tablet:text-start">
                        야놀자리서치의 더 많은 소식을 SNS로 만나보세요.
                    </h3>
                    
                    {/* SNS 아이콘 리스트 */}
                    <ul 
                        role="list"
                        aria-label="SNS 링크 목록"
                        className="flex flex-wrap items-center gap-[24px] tablet:gap-6 justify-center tablet:justify-start"
                    >
                        {snsData.map((sns) => (
                            <li key={sns.id} role="listitem">
                                <a
                                    href={sns.href}
                                    className="block hover:opacity-80 transition-opacity"
                                    aria-label={`${sns.name}로 이동`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <SvgIcon
                                        iconName={sns.iconName}
                                        width={26}
                                        height={26}
                                        className="text-(--color-text-primary)"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* 구독신청하기 버튼 */}
                <div className="w-full tablet:w-auto flex-shrink-0 flex items-center justify-center tablet:justify-end group">
                    <a
                        href="/"
                        aria-label="구독신청하기"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            type="button"
                            className="inline-block bg-(--color-orange-1) text-white px-[50px] py-[20px] tablet:py-4 rounded-full tablet:text-base font-semibold group-hover:bg-(--color-orange-2) transition-colors cursor-pointer"
                        aria-label="구독신청하기"
                    >
                        구독신청하기
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}

