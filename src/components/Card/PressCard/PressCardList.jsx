import { useState } from 'react';
import PressCard from './PressCard';
import { pressReleaseData, pressMaterialData } from '../../../data/pressData';
import SvgIcon from '../../SvgIcon/SvgIcon';
import SectionTitle from '../../SectionTitle/SectionTitle';

export default function PressCardList() {
    const [activeTab, setActiveTab] = useState('press'); // 'press' 또는 'material'

    const currentData = activeTab === 'press' ? pressReleaseData : pressMaterialData;

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
                {currentData.map((item) => (
                    <PressCard key={item.id} data={item} />
                ))}
            </ul>
        </article>
    );
}

