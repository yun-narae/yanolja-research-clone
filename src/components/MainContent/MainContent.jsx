import VisualHighlightCardList from "../Card/VisualHighlightCard/VisualHighlightCardList";
import IconBackgroundCardList from "../Card/IconBackgroundCard/IconBackgroundCardList";

export default function MainContent() {
    return (
        <section className="w-full max-w-[1290px] mx-auto px-[20px] tablet:px-[15px] py-[50px] overflow-x-hidden">
            <h2 className="sr-only">메인 콘텐츠</h2>
            <div className="w-full flex flex-col desktop:flex-row items-start gap-10 desktop:gap-12">
                <VisualHighlightCardList />
                <IconBackgroundCardList />
            </div>
        </section>
    );
}

