import { useState, useEffect } from 'react';
import IconBackgroundCard from './IconBackgroundCard';
import { iconBackgroundData } from '../../../data/iconBackgroundData';
import IconBackgroundCardSkeleton from '../../Skeleton/IconBackgroundCardSkeleton';

export default function IconBackgroundCardList() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <article className='w-full desktop:w-[calc(25%-20px)] desktop:shrink-0 desktop:overflow-hidden'>
            <h3 className="sr-only">야놀자 데이터</h3>
            <ul 
                role="list"
                aria-label="야놀자 데이터 카드 목록"
                className="
                    flex 
                    flex-col 
                    mobile:flex-row 
                    desktop:flex-col 
                    gap-3 
                    tablet:gap-4 
                    items-stretch 
                "
            >
                {isLoading ? (
                    Array.from({ length: iconBackgroundData.length }).map((_, index) => (
                        <IconBackgroundCardSkeleton key={`skeleton-${index}`} />
                    ))
                ) : (
                    iconBackgroundData.map((item) => (
                        <IconBackgroundCard data={item} key={item.id}  />
                    ))
                )}
            </ul>
        </article>
    );
}

