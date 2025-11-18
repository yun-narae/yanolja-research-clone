import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainContent from "../MainContent/MainContent";
import InsightTrendReportContent from '../InsightTrendReportContent/InsightTrendReportContent';
import ReportContent from '../ReportContent/ReportContent';

export default function Layout() {
    return (
        <>
            <Header />
            <main>
                <MainContent />
                <InsightTrendReportContent />
                <ReportContent />
            </main>
            <Footer />
        </>
    );
}

