export default function SvgIcon({ 
    iconName, 
    width = 24, 
    height = 24, 
    className = "",
    asButton = false,
    onClick,
    ariaLabel,
    ...props 
}) {
    const iconContent = (
        <svg 
            width={width} 
            height={height} 
            className={className}
            aria-label={ariaLabel}
            {...props}
        >
            <use href={`/sprite-sheet.svg#${iconName}`} />
        </svg>
    );

    if (asButton) {
        return (
            <button 
                type="button"
                onClick={onClick}
                className={className}
                aria-label={ariaLabel || iconName}
                {...props}
            >
                {iconContent}
            </button>
        );
    }

    return (
        <div className={className} {...props}>
            {iconContent}
        </div>
    );
}

