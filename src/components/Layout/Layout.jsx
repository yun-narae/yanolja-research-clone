import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainContent from "../MainContent/MainContent";
import InsightTrendReportContent from '../InsightTrendReportContent/InsightTrendReportContent';

export default function Layout() {
    return (
        <>
            <Header />
            <main>
                <MainContent />
                <InsightTrendReportContent />
            </main>
            <Footer />
        </>
    );
}

