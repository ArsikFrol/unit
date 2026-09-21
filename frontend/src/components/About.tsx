import { ArrowUpRight } from "lucide-react"

import about1 from '../../public/about1.webp'
import about2 from '../../public/about2.webp'
import { cn } from "@/lib/utils"
import Title from "./UI/Title"
import AboutCarousel from "./UI/AboutCarousel"

export default function About() {

    const text1 = (
        <>
            ЮНИТ — первое межвузовское ИТ-объединение на Урале.
            <br />
            <br />
            В ЮНИТ собрались единомышленники из самых разных сфер: от разработки
            и дизайна цифровых продуктов, до фотографии и работы в пиар-отделе объединения.
        </>
    )

    const text2 = (
        <>
            Филиалы ЮНИТ есть в УрФУ и УрГЭУ, ведущих вузах Екатеринбурга. Но стать частью объединения может
            любой студент, даже из других городов!
        </>
    )

    return (
        <div className="my-[100px]" id='about'>
            <Title title="Кто мы такие" />
            <div className="flex flex-col gap-y-[30px]">
                <div className="grid grid-cols-2 gap-x-[30px]">
                    <div className="bg-bg rounded-2xl text-white text-[25px] p-[20px]">{text1}</div>
                    <AboutCarousel images={[about1, about2]} interval={5000} />
                </div>
                <div className="grid grid-cols-2 gap-x-[30px]">
                    <AboutCarousel images={[about1, about2]} interval={5000} />
                    <div className="bg-bg rounded-2xl text-white text-[25px] p-[20px] flex flex-col justify-between">
                        <div className=''>{text2}</div>
                        <div className='group relative w-[320px] flex items-center gap-x-[10px] cursor-pointer'>
                            Как попасть в ЮНИТ
                            <ArrowUpRight size={30} strokeWidth={1} className={cn(
                                'group-hover:translate-x-[5px] group-hover:translate-y-[-5px] transition-transform duration-300'
                            )} />
                            <span className={cn(
                                'absolute bottom-0 left-0 h-[1px] w-full bg-white',
                                'origin-left scale-x-0 transition-transform duration-500 ease-out',
                                'group-hover:scale-x-100'
                            )} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}