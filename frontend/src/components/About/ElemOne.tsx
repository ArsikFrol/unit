import { cn } from "@/lib/utils";
import Carousel from "./Carousel";

import about1 from '../../../public/about1.webp'
import about2 from '../../../public/about2.webp'

export function ElemOne() {
const text1 = (
        <>
            ЮНИТ — первое межвузовское ИТ-объединение на Урале.
            <br />
            <br />
            В ЮНИТ собрались единомышленники из самых разных сфер: от разработки
            и дизайна цифровых продуктов, до фотографии и работы в пиар-отделе объединения.
        </>
    )

    return(
        <div className={cn(
                    "lg:grid lg:grid-cols-2 lg:gap-x-[30px]",
                    'max-lg:flex max-lg:flex-col max-lg:gap-y-[20px]'
                )}>
                    <div className={cn(
                        "xl:text-[25px] bg-bg rounded-2xl text-white p-[20px]",
                        'lg:text-[20px]',
                        'md:text-[25px]',
                        'max-md:text-[20px]'
                    )}>{text1}</div>    
                    <Carousel images={[about1, about2]} interval={5000} />
                </div>   
    )
}