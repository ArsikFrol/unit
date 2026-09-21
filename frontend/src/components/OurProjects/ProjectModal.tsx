'use client'

import { useClickAway } from "react-use"
import { useRef } from "react"
import { ArrowUpRight, PlayIcon, X } from "lucide-react"

import { useLockScroll } from "@/hooks/useLockScroll"
import { useEscape } from "@/hooks/useEscape"
import { cn } from "@/lib/utils"
import Date from "./Date"
import Logo from "./Logo"
import { GetProject } from "@/types/project"

type Props = {
    obj: GetProject,
    setIdShowBigElem: (value: string) => void,
}

export default function ProjectModal({ obj, setIdShowBigElem }: Props) {

    const ref = useRef<HTMLDivElement>(null)

    useLockScroll()
    useEscape(() => setIdShowBigElem(''))
    useClickAway(ref, () => setIdShowBigElem(''))

    return (
        <div className={cn(
            'z-20 fixed top-0 left-0 w-full h-screen',
            'bg-white/40 transition-opacity duration-300'
        )}>
            <div className={cn(
                'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                'w-[1200px] flex gap-x-[10px] justify-between'
            )} ref={ref}>
                <div className="rounded-2xl p-[30px]" style={{ background: obj.bgColor }}>
                    <div className='flex justify-between'>
                        <Logo obj={obj} />
                        <Date obj={obj} />
                    </div>
                    <div className='text-white mt-[20px] mb-[40px]'>{obj.desc}</div>
                    <div className='relative w-full h-[400px] bg-gray-600 rounded-2xl'>
                        <PlayIcon size={50} strokeWidth={1.5}
                            className={cn(
                                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                                'hover:scale-105 transition-transform duration-300 cursor-pointer'
                            )} />
                    </div>
                    <div className='flex items-center gap-x-[10px] mt-[20px]'>
                        <div className='text-white'>Список технологий проекта:</div>
                        <div className='flex items-center'>Html tailwind</div>
                    </div>
                    <div className='flex items-center gap-x-[10px] mt-[20px]'>
                        <div className='text-white'>Ссылка на продукт:</div>
                        <div className={cn(
                            'group w-fit flex items-center gap-x-[10px] text-white/50',
                            'hover:text-white transition-all duration-300 cursor-pointer'
                        )}>
                            {obj.link}
                            <ArrowUpRight strokeWidth={1} className={cn(
                                'group-hover:translate-x-[3px] group-hover:translate-y-[-3px] transition-all duration-300'
                            )} />
                        </div>
                    </div>
                </div>
                <div className='group p-[10px] rounded-2xl self-start cursor-pointer' style={{ background: obj.bgColor }}
                    onClick={() => setIdShowBigElem('')}>
                    <X size={40} strokeWidth={1.5} className={cn(
                        "text-white group-hover:scale-105 group-hover:rotate-90 transition-all duration-300"
                    )} />
                </div>
            </div>
        </div>
    )
}