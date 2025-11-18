import ReportCardList from "../Card/ReportCard/ReportCardList";

export default function ReportContent() {
    return (
        <section className="w-full bg-(--color-bg-yellow-light)">
            <h2 className="sr-only">연구보고서</h2>
            <ReportCardList />
        </section>
    );
}

