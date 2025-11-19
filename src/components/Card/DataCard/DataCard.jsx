import iconMail from '../../../asset/data_icon/icon_mail.svg';
import SectionTitle from '../../SectionTitle/SectionTitle';

export default function DataCard() {
    return (
        <article className="w-full">
            <h3 className="sr-only">데이터 섹션</h3>
            <SectionTitle
                title="데이터"
                showArrow
            />
            <a
                href="/data"
                className="block relative w-full cursor-pointer group"
                role="link"
                tabIndex="0"
                aria-label="야놀자리서치가 활용한 데이터를 편하게 사용해보세요"
            >
                <div className="flex items-center flex-col gap-[36px] tablet:gap-[28px] relative w-full rounded-xl tablet:rounded-2xl bg-(--color-purple-light) overflow-hidden group-hover:shadow-lg transition-shadow">
                    {/* 아이콘 */}
                    <div className="mt-[54px] max-w-[118px] max-h-[103px]">
                        <img 
                            src={iconMail}
                            alt="아이콘"
                            className="w-full h-full"
                            aria-hidden="true"
                            loading="lazy"
                            decoding="async"
                            width="118"
                            height="103"
                        />
                    </div>
                    
                    {/* 텍스트 */}
                    <div className="text-center">
                        <p className="text-white mb-[47px] text-sm tablet:text-base font-medium leading-relaxed">
                            야놀자리서치가 활용한<br />
                            데이터를<br />
                            편하게 사용해보세요!
                        </p>
                    </div>
                </div>
            </a>
        </article>
    );
}

