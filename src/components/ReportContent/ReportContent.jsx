import useScrollFadeIn from "../../hooks/useScrollFadeIn";
import ReportCardList from "../Card/ReportCard/ReportCardList";

export default function ReportContent() {
    const [ref, isVisible] = useScrollFadeIn();

    return (
        <section 
            ref={ref}
            className={`w-full bg-(--color-bg-yellow-light) ${isVisible ? 'fade-in-up' : 'fade-in-up-hidden'}`}
        >
            <h2 className="sr-only">연구보고서</h2>
            <ReportCardList />
        </section>
    );
}

