import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Carousel from "./Carousel";

import about1 from '../../../public/about1.webp'
import about2 from '../../../public/about2.webp'

export function ElemTwo() {
    const text2 = (
        <>
            Филиалы ЮНИТ есть в УрФУ и УрГЭУ, ведущих вузах Екатеринбурга. Но стать частью объединения может
            любой студент, даже из других городов!
        </>
    )

    return(
        <>
            <div  className={cn(
                "lg:grid lg:grid-cols-2 lg:gap-x-[30px]",
                'max-lg:hidden'
            )}>
                <Carousel images={[about1, about2]} interval={5000} />
                <div className={cn(
                    "xl:text-[25px] bg-bg rounded-2xl text-white p-[20px] flex flex-col justify-between",
                    'lg:text-[20px]'
                )}>
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
            <div  className={cn(
                "lg:hidden",
                'max-lg:flex max-lg:flex-col max-lg:gap-y-[10px]'
            )}>
                <div className={cn(
                    "bg-bg rounded-2xl text-white p-[20px] flex flex-col justify-between",
                    'max-lg:gap-y-[50px]',
                    'md:text-[25px] max-md:text-[20px]'
                )}>
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
                <Carousel images={[about1, about2]} interval={5000} />
            </div>
        </>
    )
}