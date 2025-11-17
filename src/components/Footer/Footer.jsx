import { useState } from "react";
import logo from "../../asset/logo_white.svg";
import SvgIcon from "../SvgIcon/SvgIcon";
import { companyInfo, footerLinks, familySites, complianceInfo } from "../../data/footerData";

export default function Footer() {
    const [selectedFamilySite, setSelectedFamilySite] = useState("");

    const handleFamilySiteChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue) {
            const selectedSite = familySites.find(site => site.id === selectedValue);
            if (selectedSite) {
                window.open(selectedSite.href, '_blank', 'noopener,noreferrer');
                setSelectedFamilySite("");
            }
        }
    };

    return (
        <footer className="relative">
            <div className="flex flex-col w-full px-[26px] pt-9 pb-[65px] laptop:px-[88px] laptop:pt-[52px] laptop:pb-[95px] bg-(--color-text-primary) text-white">
                <div className="flex flex-col tablet:flex-row tablet:items-start tablet:justify-between">
                    {/* 왼쪽: 회사 정보 */}
                    <div className="flex flex-col tablet:pr-8">
                        {/* 로고 */}
                        <a
                            href="/"
                            className="inline-block w-[143px] mb-4"
                            aria-label="야놀자 리서치"
                        >
                            <img
                                src={logo}
                                alt="야놀자 리서치"
                                className="w-auto"
                            />
                        </a>

                        {/* 개인정보 처리방침 */}
                        <ul aria-label="푸터 링크" className="flex flex-col py-[5px] opacity-[0.45] hover:opacity-[0.8] transition">
                            {footerLinks.map((link) => (
                                <li key={link.id}>
                                    <a 
                                        href={link.href}
                                        className="block text-[1.1rem] font-semibold text-white"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* 회사 정보 */}
                        <ul className="flex flex-wrap items-center gap-x-2.5 py-[5px] text-[0.875rem] font-light text-white opacity-[0.45]">
                            <li>{companyInfo.companyName}</li>
                            <li className="flex items-center gap-x-2.5">
                                <span aria-hidden="true" className="hidden tablet:block text-white opacity-[0.45]">|</span>
                                대표이사. {companyInfo.ceo}
                            </li>
                            <li className="flex items-center gap-x-2.5">
                                <span aria-hidden="true" className="hidden tablet:block text-white opacity-[0.45]">|</span>
                                사업자등록번호. {companyInfo.businessNumber}
                            </li>
                        </ul>

                        <ul className="flex flex-wrap items-center gap-2.5 py-[5px] text-white opacity-[0.45]">
                            {/* Compliance 정보 */}
                            <li className="text-[0.875rem] font-light text-(--color-yellow-2) hover:underline">
                                <a
                                    href={complianceInfo.href}
                                    className="block"
                                >
                                    {complianceInfo.label} {complianceInfo.description}
                                </a>
                            </li>
                            {/* 이메일 */}
                            <li className="flex items-center gap-x-2.5 text-[0.875rem] font-light text-white hover:underline">
                                <span aria-hidden="true" className="hidden tablet:block opacity-[0.45]">|</span>
                                <a
                                    href={`mailto:${companyInfo.email}`}
                                    className="block"
                                >
                                    E-mail. {companyInfo.email}
                                </a>
                            </li>
                            {/* 주소 */}
                            <li className="flex items-center gap-x-2.5 text-[0.875rem] font-light text-white">
                                <span aria-hidden="true" className="hidden tablet:block opacity-[0.45]">|</span>
                                <p>{companyInfo.address}</p>
                            </li>
                        </ul>
                        {/* 저작권 */}
                        <p className="py-[5px] text-[0.875rem] font-semibold text-white opacity-[0.2]">
                            {companyInfo.copyright}
                        </p>
                    </div>

                    {/* 오른쪽: Family site 드롭다운 */}
                    <div className="relative w-fit mt-10 tablet:mt-0">
                        <select
                            id="family-site-menu"
                            value={selectedFamilySite}
                            onChange={handleFamilySiteChange}
                            className="relative w-[230px] h-12 px-6 pr-10 rounded-full text-[0.875rem] bg-(--color-gray-dark) text-white appearance-none cursor-pointer hover:bg-(--color-gray-800) transition"
                            aria-label="패밀리 사이트 선택"
                        >
                            <option value="" disabled>
                                Family site
                            </option>
                            {familySites.map((site) => (
                                <option key={site.id} value={site.id}>
                                    {site.label}
                                </option>
                            ))}
                        </select>
                        <SvgIcon
                            iconName="lang_arrow_black"
                            width={12}
                            height={8}
                            className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none"
                            style={{ filter: "brightness(0) invert(1)" }}
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}

