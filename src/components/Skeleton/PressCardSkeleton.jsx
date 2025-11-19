import Skeleton, { SkeletonBox } from './Skeleton';

export default function PressCardSkeleton() {
    return (
        <li className="relative">
            <div className="flex flex-col items-start justify-between gap-3 py-[8px] flex-1 min-w-0">
                <SkeletonBox className="h-6 w-3/4 mb-2 rounded" />
                <SkeletonBox className="h-6 w-2/5 mb-2 rounded" />
            </div>
        </li>
    );
}

