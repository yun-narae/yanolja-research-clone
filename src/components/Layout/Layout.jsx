import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainContent from "../MainContent/MainContent";

export default function Layout() {
    return (
        <>
            <Header />
            <main>
                <MainContent />
            </main>
            <Footer />
        </>
    );
}

