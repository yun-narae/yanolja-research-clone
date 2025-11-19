import { useState, useEffect } from 'react';
import PressCard from './PressCard';
import { pressReleaseData, pressMaterialData } from '../../../data/pressData';
import SvgIcon from '../../SvgIcon/SvgIcon';
import SectionTitle from '../../SectionTitle/SectionTitle';
import PressCardSkeleton from '../../Skeleton/PressCardSkeleton';

export default function PressCardList() {
    const [activeTab, setActiveTab] = useState('press'); // 'press' 또는 'material'
    const [isLoading, setIsLoading] = useState(true);

    const currentData = activeTab === 'press' ? pressReleaseData : pressMaterialData;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <article className="w-full">
            <h3 className="sr-only">언론보도 및 보도자료</h3>
            
            <SectionTitle 
                title="언론보도"
                subtitle="보도자료"
                onTitleClick={() => setActiveTab('press')}
                onSubtitleClick={() => setActiveTab('material')}
                activeTitle={activeTab === 'press'}
                showMoreLink
            />

            {/* 카드 리스트 */}
            <ul 
                role="list"
                aria-label={`${activeTab === 'press' ? '언론보도' : '보도자료'} 목록`}
                className="space-y-0"
            >
                {isLoading ? (
                    Array.from({ length: 2 }).map((_, index) => (
                        <PressCardSkeleton key={`skeleton-${index}`} />
                    ))
                ) : (
                    currentData.map((item) => (
                        <PressCard key={item.id} data={item} />
                    ))
                )}
            </ul>
        </article>
    );
}

