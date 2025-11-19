import { useState, useEffect } from 'react';
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
import PressCardList from "../Card/PressCard/PressCardList";
import DataCard from "../Card/DataCard/DataCard";
import DataCardSkeleton from "../Skeleton/DataCardSkeleton";
import SvgIcon from "../SvgIcon/SvgIcon";

export default function PressDataContent() {
    const [isLoading, setIsLoading] = useState(true);
    const [ref, isVisible] = useScrollFadeIn();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section 
            ref={ref}
            className={`w-full max-w-[1290px] mx-auto px-[20px] tablet:px-[15px] my-[56px] tablet:mb-[80px] ${isVisible ? 'fade-in-up' : 'fade-in-up-hidden'}`}
        >
            <h2 className="sr-only">언론보도 및 데이터</h2>
            
            <div className="flex flex-col tablet:flex-row gap-[56px] tablet:gap-[80px]">
                <div className="tablet:flex-[2] min-w-0">
                    <PressCardList />
                </div>

                <div className="tablet:flex-[1] tablet:max-w-[235px]">
                    {isLoading ? (
                        <DataCardSkeleton />
                    ) : (
                        <DataCard />
                    )}
                </div>
            </div>
        </section>
    );
}

