import Skeleton, { SkeletonBox } from './Skeleton';

export default function IconBackgroundCardSkeleton() {
    return (
        <li className="relative flex-1 flex flex-col items-start justify-between mobile:min-w-0">
            <div className="relative flex flex-col gap-1 tablet:gap-2 w-full">
                <SkeletonBox className="rounded-xl tablet:rounded-2xl h-20" />
            </div>
        </li>
    );
}

