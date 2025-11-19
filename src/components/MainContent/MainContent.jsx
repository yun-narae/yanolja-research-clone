import useScrollFadeIn from "../../hooks/useScrollFadeIn";
import VisualHighlightCardList from "../Card/VisualHighlightCard/VisualHighlightCardList";
import IconBackgroundCardList from "../Card/IconBackgroundCard/IconBackgroundCardList";

export default function MainContent() {
    const [ref, isVisible] = useScrollFadeIn();

    return (
        <section 
            ref={ref}
            className={`w-full max-w-[1290px] mx-auto px-[20px] tablet:px-[15px] py-[50px] overflow-x-hidden ${isVisible ? 'fade-in-up' : 'fade-in-up-hidden'}`}
        >
            <h2 className="sr-only">메인 콘텐츠</h2>
            <div className="w-full flex flex-col desktop:flex-row items-start gap-10 desktop:gap-12">
                <VisualHighlightCardList />
                <IconBackgroundCardList />
            </div>
        </section>
    );
}

