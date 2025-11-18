import SvgIcon from "../SvgIcon/SvgIcon";

/**
 * SectionTitle 컴포넌트 - 섹션 제목을 표시하는 컴포넌트
 * 
 * @param {string} title - 섹션 제목 (필수)
 * @param {string} subtitle - 섹션 부제목 (선택, 있으면 2개 텍스트 버전)
 * @param {boolean} showArrow - 화살표 아이콘 표시 여부
 * @param {boolean} showMoreLink - 더보기 링크 표시 여부
 * @param {string} href - 링크 URL (showArrow 또는 showMoreLink가 true일 때 사용)
 * @param {string} linkText - 링크 텍스트 (showMoreLink가 true일 때 사용, 기본값: '더보기')
 * @param {function} onTitleClick - 제목 클릭 핸들러 (추후 다른 콘텐츠 표시용)
 * @param {function} onSubtitleClick - 부제목 클릭 핸들러 (추후 다른 콘텐츠 표시용)
 * @param {string} className - 추가 CSS 클래스
 */
export default function SectionTitle({ 
    title,
    subtitle,
    showArrow = false,
    showMoreLink = false,
    href = '/',
    linkText = '더보기',
    onTitleClick,
    onSubtitleClick,
    className = ''
}) {
    const hasSubtitle = !!subtitle;

    // 텍스트 2개인 경우 (title + subtitle)
    if (hasSubtitle) {
        return (
            <div className={`w-full flex items-center justify-between mb-6 tablet:mb-8 ${className}`}>
                <div className="flex gap-2">
                    <strong className="text-(--color-text-primary) text-[1.75rem] font-semibold">
                        {onTitleClick ? (
                            <button
                                type="button"
                                onClick={onTitleClick}
                                className="text-left hover:text-(--color-orange-1) transition-colors cursor-pointer"
                                aria-label={title}
                            >
                                {title}
                            </button>
                        ) : (
                            title
                        )}
                    </strong>
                    <strong className="text-(--color-gray-200) text-[1.75rem] font-semibold">
                        {onSubtitleClick ? (
                            <button
                                type="button"
                                onClick={onSubtitleClick}
                                className="text-left hover:text-(--color-orange-1) transition-colors cursor-pointer"
                                aria-label={subtitle}
                            >
                                {subtitle}
                            </button>
                        ) : (
                            subtitle
                        )}
                    </strong>
                </div>
                {showMoreLink && (
                    <a 
                        href={href}
                        className="flex items-center text-[14px] tablet:text-[16px] font-medium gap-1 text-(--color-text-primary) hover:text-(--color-gray-500) transition-colors"
                        aria-label={`${title} ${linkText}`}
                    >
                        <span>{linkText}</span>
                        <SvgIcon 
                            iconName="arrow_right" 
                            width={15} 
                            height={14}
                            className="text-current"
                        />
                    </a>
                )}
            </div>
        );
    }

    // 텍스트 1개인 경우 (title만)
    return (
        <div className={`w-full flex items-center ${showMoreLink ? 'justify-between' : 'gap-2'} mb-6 tablet:mb-8 ${className}`}>
            {showArrow ? (
                <a
                    href={href}
                    className="group flex items-center gap-2 cursor-pointer hover:text-(--color-orange-1) transition-colors"
                    aria-label={`${title} 더보기`}
                >
                    <strong className="text-(--color-text-primary) text-[1.75rem] font-semibold group-hover:text-(--color-orange-1) transition-colors">
                        {onTitleClick ? (
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onTitleClick();
                                }}
                                className="text-left cursor-pointer"
                                aria-label={title}
                            >
                                {title}
                            </button>
                        ) : (
                            title
                        )}
                    </strong>
                    <div className="flex items-center text-(--color-text-primary) group-hover:text-(--color-orange-1) transition-colors">
                        <SvgIcon 
                            iconName="arrow_right" 
                            width={20} 
                            height={20}
                            className="text-current"
                        />
                    </div>
                </a>
            ) : (
                <div className="flex items-center gap-2">
                    <strong className="text-(--color-text-primary) text-[1.75rem] font-semibold">
                        {onTitleClick ? (
                            <button
                                type="button"
                                onClick={onTitleClick}
                                className="text-left hover:text-(--color-orange-1) transition-colors cursor-pointer"
                                aria-label={title}
                            >
                                {title}
                            </button>
                        ) : (
                            title
                        )}
                    </strong>
                </div>
            )}
            {showMoreLink && (
                <a 
                    href={href}
                    className="flex items-center text-[14px] tablet:text-[16px] font-medium gap-1 text-(--color-text-primary) hover:text-(--color-orange-1) transition-colors"
                    aria-label={`${title} ${linkText}`}
                >
                    <span>{linkText}</span>
                    <SvgIcon 
                        iconName="arrow_right" 
                        width={15} 
                        height={14}
                        className="text-current"
                    />
                </a>
            )}
        </div>
    );
}

