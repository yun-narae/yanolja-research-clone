import IconBackgroundCard from './IconBackgroundCard';
import { iconBackgroundData } from '../../../data/iconBackgroundData';

export default function IconBackgroundCardList() {
    return (
        <article className='w-full desktop:w-[calc(25%-20px)] desktop:shrink-0 desktop:overflow-hidden'>
            <h3 className="sr-only">야놀자 데이터</h3>
            <ul 
                role="list"
                className="
                    flex 
                    flex-col 
                    mobile:flex-row 
                    desktop:flex-col 
                    gap-3 
                    tablet:gap-4 
                    items-stretch 
                "
            >
                {iconBackgroundData.map((item) => (
                    <IconBackgroundCard data={item} key={item.id}  />
                ))}
            </ul>
        </article>
    );
}

