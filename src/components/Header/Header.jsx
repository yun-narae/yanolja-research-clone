import { useState, useEffect, useRef } from "react";
import logo from "../../asset/logo.svg";
import SvgIcon from "../SvgIcon/SvgIcon";
import { menuData } from "../../data/menuData";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoveredMenuId, setHoveredMenuId] = useState(null);
    const [selectedLang, setSelectedLang] = useState("ko");
    const mobileMenuRef = useRef(null);

    // 포커스 가능한 요소 찾기
    const getFocusableElements = (container) => {
        const focusableSelectors = [
            'a[href]',
            'button:not([disabled])',
            'select:not([disabled])',
            'input:not([disabled])',
            'textarea:not([disabled])',
            '[tabindex]:not([tabindex="-1"])'
        ].join(', ');
        
        return Array.from(container.querySelectorAll(focusableSelectors)).filter(
            (el) => !el.hasAttribute('aria-hidden') || el.getAttribute('aria-hidden') === 'false'
        );
    };

    // ESC 키로 모바일 메뉴 닫기 및 포커스 트랩
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape" && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        const handleTabKey = (e) => {
            if (!isMenuOpen || !mobileMenuRef.current) return;

            const focusableElements = getFocusableElements(mobileMenuRef.current);
            if (focusableElements.length === 0) return;

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.key === "Tab") {
                if (e.shiftKey) {
                    // Shift + Tab: 역방향
                    if (document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    }
                } else {
                    // Tab: 정방향
                    if (document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        };

        document.addEventListener("keydown", handleEscape);
        document.addEventListener("keydown", handleTabKey);
        
        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.removeEventListener("keydown", handleTabKey);
        };
    }, [isMenuOpen]);

    // 메뉴가 열릴 때 첫 번째 포커스 가능한 요소에 포커스 이동
    useEffect(() => {
        if (isMenuOpen && mobileMenuRef.current) {
            const focusableElements = getFocusableElements(mobileMenuRef.current);
            if (focusableElements.length > 0) {
                setTimeout(() => {
                    focusableElements[0].focus();
                }, 100);
            }
        }
    }, [isMenuOpen]);

    // 모바일 메뉴 열림 시 body 스크롤 막기
    useEffect(() => {
        if (isMenuOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';
            
            return () => {
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                document.body.style.overflow = '';
                window.scrollTo(0, scrollY);
            };
        }
    }, [isMenuOpen]);

    const handleLangSelect = (lang) => {
        setSelectedLang(lang);
    };

    return (
        <header 
            className="relative"
            onMouseLeave={() => setHoveredMenuId(null)}
        >
            {/* 상단 헤더 바 */}
            <div className="relative flex items-center justify-between w-full h-[60px] mobile:h-[72px] tablet:h-[97px] px-5 laptop:px-10 bg-white border-b border-(--color-gray-border)">
                {/* 로고 */}
                <a 
                    href="/" 
                    className="flex shrink-0 w-40 tablet:w-[180px]"
                    aria-label="야놀자 리서치"
                >
                    <h1 className="sr-only">야놀자 리서치</h1>
                    <img
                        src={logo}
                        alt="야놀자 리서치"
                        className="w-auto desktop:h-auto"
                    />
                </a>

                {/* 데스크톱 GNB */}
                <nav 
                    className="hidden laptop:flex flex-1 items-center justify-center"
                    aria-label="메인 메뉴"
                >
                    <ul className="flex items-center justify-center text-center text-[16px] font-medium text-black">
                        {menuData
                            .filter((menu) => menu.showInDesktop)
                            .map((menu) => (
                                <li 
                                    key={menu.id} 
                                    className="relative w-40"
                                    onMouseEnter={() => setHoveredMenuId(menu.id)}
                                    onFocus={() => setHoveredMenuId(menu.id)}
                                    onBlur={(e) => {
                                        const submenu = document.getElementById(`submenu-${menu.id}`);
                                        if (submenu && submenu.contains(e.relatedTarget)) {
                                            return;
                                        }
                                        if (!e.currentTarget.contains(e.relatedTarget)) {
                                            setHoveredMenuId(null);
                                        }
                                    }}
                                >
                                    <a 
                                        href={menu.href} 
                                        className="block text-black transition-colors hover:text-(--color-orange-1)"
                                        aria-haspopup={menu.subMenu.length > 0 ? "true" : undefined}
                                        aria-expanded={hoveredMenuId === menu.id && menu.subMenu.length > 0 ? "true" : "false"}
                                        aria-controls={menu.subMenu.length > 0 ? `submenu-${menu.id}` : undefined}
                                        onKeyDown={(e) => {
                                            // Tab 키로 서브메뉴로 이동
                                            if (e.key === "Tab" && !e.shiftKey && menu.subMenu.length > 0) {
                                                e.preventDefault();
                                                setHoveredMenuId(menu.id);
                                                setTimeout(() => {
                                                    const submenuId = `submenu-${menu.id}`;
                                                    const submenuPanel = document.getElementById(submenuId);
                                                    if (submenuPanel) {
                                                        const menuGroup = submenuPanel.querySelector(`ul[aria-label="${menu.label}"]`);
                                                        if (menuGroup) {
                                                            const firstSubmenuLink = menuGroup.querySelector('a[role="menuitem"]');
                                                            if (firstSubmenuLink) {
                                                                firstSubmenuLink.focus();
                                                                return;
                                                            }
                                                        }
                                                        const firstSubmenuLink = submenuPanel.querySelector('a[role="menuitem"]');
                                                        if (firstSubmenuLink) {
                                                            firstSubmenuLink.focus();
                                                        }
                                                    }
                                                }, 0);
                                            }
                                        }}
                                    >
                                        {menu.label}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>
                </nav>

                {/* 데스크탑 언어 선택기 */}
                <div className="hidden laptop:flex shrink-0 items-center justify-center laptop:justify-center desktop:justify-end w-[180px] text-[16px] font-medium">
                    <div className="relative flex items-center">
                        <select 
                            className="pr-6 bg-transparent border-none appearance-none cursor-pointer text-black transition-colors hover:text-(--color-orange-1)"
                            value={selectedLang}
                            onChange={(e) => handleLangSelect(e.target.value)}
                            aria-label="언어 선택"
                        >
                            <option value="ko">KR</option>
                            <option value="en">EN</option>
                        </select>
                        <SvgIcon
                            iconName="lang_arrow_black"
                            width={12}
                            height={8}
                            className="absolute top-1 right-0 pointer-events-none"
                        />
                    </div>
                </div>

                {/* 드롭다운 메뉴 패널 - 전체 너비, 각 메인 메뉴 하단에 정렬 */}
                {hoveredMenuId && (() => {
                    const activeMenu = menuData.find((menu) => menu.id === hoveredMenuId && menu.subMenu.length > 0);
                    if (!activeMenu) return null;
                    
                    return (
                        <div 
                            id={`submenu-${activeMenu.id}`}
                            className="hidden laptop:block absolute top-[97px] left-0 right-0 z-50 bg-white shadow-lg" 
                            onMouseEnter={() => setHoveredMenuId(hoveredMenuId)}
                            onMouseLeave={() => setHoveredMenuId(null)}
                            onFocus={() => setHoveredMenuId(hoveredMenuId)}
                            onBlur={(e) => {
                                const menuLink = document.querySelector(`a[aria-controls="${`submenu-${activeMenu.id}`}"]`);
                                if (menuLink && menuLink.contains(e.relatedTarget)) {
                                    return;
                                }
                                if (!e.currentTarget.contains(e.relatedTarget)) {
                                    setHoveredMenuId(null);
                                }
                            }}
                            role="menu"
                            aria-label={`${activeMenu.label} 서브메뉴`}
                        >
                            <div className="px-20 py-8">
                                <div className="flex justify-center text-gray-800 font-medium">
                                    {menuData
                                        .filter((menu) => menu.showInDesktop && menu.subMenu.length > 0)
                                        .map((menu) => (
                                            <div key={menu.id} className="w-40">
                                                <ul role="group" aria-label={menu.label}>
                                                    {menu.subMenu.map((subItem, index) => {
                                                        const isLastSubmenu = index === menu.subMenu.length - 1;
                                                        const allDesktopMenus = menuData.filter(m => m.showInDesktop);
                                                        const currentMenuIndex = allDesktopMenus.findIndex(m => m.id === menu.id);
                                                        const isLastMenu = currentMenuIndex === allDesktopMenus.length - 1;
                                                        const nextMenu = !isLastMenu ? allDesktopMenus[currentMenuIndex + 1] : null;
                                                        
                                                        return (
                                                            <li key={`${menu.id}-${index}`} className="py-2.5" role="none">
                                                                <a 
                                                                    href={subItem.href} 
                                                                    className="block text-center text-gray-800 font-medium transition-colors hover:text-black"
                                                                    role="menuitem"
                                                                    onKeyDown={(e) => {
                                                                        // 마지막 서브메뉴 항목에서 Tab 키를 누르면 다음 메인 메뉴 또는 언어 선택기로 이동
                                                                        if (e.key === "Tab" && !e.shiftKey && isLastSubmenu) {
                                                                            if (isLastMenu) {
                                                                                // 마지막 메뉴의 마지막 서브메뉴 항목이면 언어 선택기로 이동
                                                                                const langSelect = document.querySelector('select[aria-label="언어 선택"]');
                                                                                if (langSelect) {
                                                                                    e.preventDefault();
                                                                                    langSelect.focus();
                                                                                }
                                                                            } else if (nextMenu) {
                                                                                // 다음 메인 메뉴로 이동
                                                                                const nav = e.currentTarget.closest('header').querySelector('nav[aria-label="메인 메뉴"]');
                                                                                if (nav) {
                                                                                    const nextMenuLink = nav.querySelector(`a[aria-controls*="${nextMenu.id}"]`) ||
                                                                                                        nav.querySelector(`a[href="${nextMenu.href}"]`);
                                                                                    if (nextMenuLink) {
                                                                                        e.preventDefault();
                                                                                        nextMenuLink.focus();
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }}
                                                                >
                                                                    {subItem.label}
                                                                </a>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    );
                })()}

                {/* 모바일/태블릿 햄버거 버튼 */}
                <div className="flex items-center justify-center w-9 h-9 ml-auto rounded-4xl cursor-pointer transition-colors hover:bg-(--color-gray-pale) laptop:hidden">
                    <button
                        type="button"
                        className="relative flex flex-col justify-between w-5 h-4 cursor-pointer"
                        aria-label="메뉴 열기"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <span aria-hidden="true" className="absolute top-0 left-0 w-5 h-px rounded-xs bg-(--color-gray-dark) transition-all duration-300" />
                        <span aria-hidden="true" className="absolute top-2 left-0 w-5 h-px rounded-xs bg-(--color-gray-dark) transition-all duration-300" />
                        <span aria-hidden="true" className="absolute bottom-0 left-0 w-5 h-px rounded-xs bg-(--color-gray-dark) transition-all duration-300" />
                    </button>
                </div>
            </div>

            {/* 배경 레이어 */}
            <div
                className={`z-10 fixed inset-0 bg-black/60 transition-opacity duration-300 desktop:hidden ${
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsMenuOpen(false)}
                aria-hidden={!isMenuOpen}
            />

            {/* 모바일 메뉴 패널 */}
            <aside
                ref={mobileMenuRef}
                id="mobile-menu"
                className={`fixed top-0 right-0 z-50 flex flex-col w-4/5 h-full bg-[#111111] text-white transition-transform duration-300 desktop:hidden ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
                aria-hidden={!isMenuOpen}
                aria-label="모바일 메뉴"
            >
                {/* 닫기 버튼 */}
                <div className="absolute top-4 right-4 z-10 p-2 text-right">
                    <button
                        type="button"
                        aria-label="메뉴 닫기"
                        onClick={() => setIsMenuOpen(false)}
                        className="relative flex items-center justify-center w-9 h-9 p-0 bg-transparent border-0 rounded-full cursor-pointer transition-colors hover:bg-gray-800"
                    >
                        {/* X 라인 1 */}
                        <span aria-hidden="true" className="absolute block w-5 h-0.5 bg-white rounded-xs transform rotate-45" />
                        {/* X 라인 2 */}
                        <span aria-hidden="true" className="absolute block w-5 h-0.5 bg-white rounded-xs transform -rotate-45" />
                    </button>
                </div>

                {/* 메뉴 리스트 */}
                <nav className="flex flex-col flex-1 justify-center px-10" aria-label="모바일 메뉴">
                    <ul className="flex flex-col gap-4 text-[28px] tablet:text-[32px] font-medium">
                        {menuData
                            .filter((menu) => menu.showInMobile)
                            .map((menu) => (
                                <li key={menu.id} className="w-fit text-white transition-colors hover:text-(--color-orange-1)">
                                    <a
                                        href={menu.href}
                                        className="uppercase"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {menu.label}
                                    </a>
                                </li>
                            ))}
                        
                        {/* 언어 선택기 */}
                        <li className="relative w-fit text-white transition-colors hover:text-(--color-orange-1)">
                            <select 
                                className="pr-6 bg-transparent border-none appearance-none cursor-pointer text-[28px] tablet:text-[32px] font-medium uppercase text-white transition-colors hover:text-(--color-orange-1)"
                                value={selectedLang}
                                onChange={(e) => {
                                    handleLangSelect(e.target.value);
                                }}
                                aria-label="언어 선택"
                            >
                                <option value="ko">KR</option>
                                <option value="en">EN</option>
                            </select>
                            <SvgIcon
                                iconName="lang_arrow_black"
                                width={12}
                                height={8}
                                className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none"
                                style={{ filter: "brightness(0) invert(1)" }}
                            />
                        </li>
                    </ul>
                </nav>
            </aside>
        </header>
    );
}
