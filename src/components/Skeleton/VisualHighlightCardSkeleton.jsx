import Skeleton, { SkeletonBox } from './Skeleton';

export default function VisualHighlightCardSkeleton() {
    return (
        <article className="relative w-full h-[280px] tablet:h-[350px]">
            <div className="relative w-full h-full overflow-hidden rounded-[20px] tablet:rounded-[30px]">
                <SkeletonBox className="w-full h-full" />
            </div>
        </article>
    );
}

