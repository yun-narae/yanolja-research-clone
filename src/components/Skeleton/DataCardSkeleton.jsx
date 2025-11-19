import Skeleton, { SkeletonBox } from './Skeleton';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function DataCardSkeleton() {
    return (
        <article className="w-full">
            <SectionTitle
                title="데이터"
                showArrow
            />

            <SkeletonBox className="w-full h-[300px] rounded-xl tablet:rounded-2xl" />
        </article>
    );
}

