// 메뉴 데이터
export const menuData = [
    {
        id: "home",
        label: "Home",
        href: "/",
        showInDesktop: false,
        showInMobile: true,
        subMenu: [],
    },
    {
        id: "research",
        label: "Research",
        href: "/",
        showInDesktop: true,
        showInMobile: true,
        subMenu: [
            { label: "인사이트", href: "/" },
            { label: "브리프", href: "/" },
            { label: "동향보고서", href: "/" },
            { label: "연구보고서", href: "/" },
            { label: "구독신청", href: "/" },
        ],
    },
    {
        id: "datalab",
        label: "Datalab",
        href: "/",
        showInDesktop: true,
        showInMobile: false,
        subMenu: [
            { label: "국내 숙박업 실적 지표", href: "/" },
            { label: "관광지표 대시보드", href: "/" },
            { label: "데이터 다운로드", href: "/" },
        ],
    },
    {
        id: "indexes",
        label: "Indexes",
        href: "/",
        showInDesktop: true,
        showInMobile: true,
        subMenu: [
            { label: "야놀자 매력도 지수", href: "/" },
            { label: "야놀자 브랜드자산 지수", href: "/" },
        ],
    },
    {
        id: "about",
        label: "About",
        href: "/",
        showInDesktop: true,
        showInMobile: true,
        subMenu: [
            { label: "연구원 소개", href: "/" },
            { label: "인사말", href: "/" },
            { label: "연구원 소식", href: "/" },
            { label: "미디어", href: "/" },
            { label: "공지사항", href: "/" },
        ],
    },
];

