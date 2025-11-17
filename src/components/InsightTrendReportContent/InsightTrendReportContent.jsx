import InsightCardList from "../Card/InsightCard/InsightCardList";
import TrendReportCardList from "../Card/TrendReportCard/TrendReportCardList";

export default function InsightTrendReportContent() {
    return (
        <section className="w-full max-w-[1290px] mx-auto pl-[20px] tablet:px-[15px] mb-[60px] tablet:mb-[80px]">
            <h2 className="sr-only">인사이트 및 동향보고서</h2>

            <div className="flex flex-col tablet:flex-row gap-[40px] tablet:gap-[60px]">
                <div className="tablet:flex-[3] min-w-0">
                    <InsightCardList />
                </div>

                <div className="tablet:flex-[2] min-w-[180px] tablet:max-w-[220px] desktop:max-w-auto">
                    <TrendReportCardList />
                </div>
            </div>
        </section>
    );
}

