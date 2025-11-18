import PressCardList from "../Card/PressCard/PressCardList";
import DataCard from "../Card/DataCard/DataCard";
import SvgIcon from "../SvgIcon/SvgIcon";

export default function PressDataContent() {
    return (
        <section className="w-full max-w-[1290px] mx-auto px-[20px] tablet:px-[15px] my-[56px] tablet:mb-[80px]">
            <h2 className="sr-only">언론보도 및 데이터</h2>
            
            <div className="flex flex-col tablet:flex-row gap-[56px] tablet:gap-[80px]">
                <div className="tablet:flex-[2] min-w-0">
                    <PressCardList />
                </div>

                <div className="tablet:flex-[1] tablet:max-w-[235px]">
                    <DataCard />
                </div>
            </div>
        </section>
    );
}

