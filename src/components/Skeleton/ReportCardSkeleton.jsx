import Skeleton, { SkeletonBox } from './Skeleton';

export default function ReportCardSkeleton() {
    return (
        <article className="relative w-auto flex-shrink-0">
            <div className="relative w-full aspect-[1.425/2] tablet:aspect-[1/1.4] overflow-hidden">
                    <SkeletonBox className="w-[220px] h-full bg-white" />
            </div>
        </article>
    );
}

