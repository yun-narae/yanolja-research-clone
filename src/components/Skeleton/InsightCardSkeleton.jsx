import Skeleton, { SkeletonBox } from './Skeleton';

export default function InsightCardSkeleton() {
    return (
        <article className="relative w-auto flex-shrink-0">
            <div className="flex flex-col w-full overflow-hidden">
                {/* 이미지 영역 */}
                <SkeletonBox className="w-[300px] tablet:w-[240px] aspect-[3/2] rounded-[20px]" />
                
                {/* 콘텐츠 영역 */}
                    <SkeletonBox className="h-8 w-3/4 my-4 rounded" />
            </div>
        </article>
    );
}

