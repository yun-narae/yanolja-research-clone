import Skeleton, { SkeletonBox } from './Skeleton';

export default function TrendReportCardSkeleton() {
    return (
        <article className="relative w-auto flex-shrink-0">
            <div className="relative w-full aspect-[1.425/2] tablet:aspect-[1/1.4] overflow-hidden rounded-[20px] tablet:rounded-[30px]">
                    <SkeletonBox className="w-[220px] h-full" />
            </div>
        </article>
    );
}

