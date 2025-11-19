export default function Skeleton({ className = "", children }) {
    return (
        <div className={`animate-pulse w-full h-full ${className}`}>
            {children}
        </div>
    );
}

export function SkeletonBox({ className = "" }) {
    return (
        <div className={`bg-(--color-gray-bg) rounded ${className}`} />
    );
}

