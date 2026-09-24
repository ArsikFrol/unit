'use client'

import { useClickAway } from "react-use"
import { useRef } from "react"
import { X } from "lucide-react"

import { useLockScroll } from "@/hooks/useLockScroll"
import { useEscape } from "@/hooks/useEscape"
import { cn } from "@/lib/utils"
import { GetProject } from "@/types/project"
import { Technologies } from "./Technologies"
import { Video } from "./Video"
import { Link } from "./Link"
import { Creators } from "./Creators"
import Logo from "@/components/UI/ProjectElem/Logo"
import Date from "./Date"

type Props = {
    obj: GetProject,
    setIdShowBigElem: (value: string) => void,
}

export default function ProjectModal({ obj, setIdShowBigElem }: Props) {

    const ref = useRef<HTMLDivElement>(null)

    useLockScroll()
    useEscape(() => { setIdShowBigElem('') })
    useClickAway(ref, () => setIdShowBigElem(''))

    return (
        <div className={cn(
            'z-20 fixed top-0 left-0 w-full h-screen',
            'bg-white/40 transition-opacity duration-300'
        )}>
            <div className={cn(
                'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                'w-[1200px] flex gap-x-[10px] justify-between max-h-[calc(100vh-100px)] overflow-y-auto'
            )} ref={ref}>
                <div className="rounded-2xl p-[30px] overflow-auto" style={{ background: obj.bgColor }}>
                    <div className='flex justify-between'>
                        <Logo obj={obj} isSmall={false} />
                        <Date obj={obj} />
                    </div>
                    <div className='text-white mt-[20px] mb-[40px]'>{obj.description}</div>
                    <Video obj={obj} />
                    <Creators obj={obj} />
                    <Technologies obj={obj} />
                    <Link obj={obj} />
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