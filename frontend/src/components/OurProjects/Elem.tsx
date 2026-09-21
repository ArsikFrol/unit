import { ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"
import Logo from "./Logo"
import { GetProject } from "@/types/project"

type Props = {
    obj: GetProject,
    setIdShowBigElem: (value: string) => void
}

export default function Elem({ obj, setIdShowBigElem }: Props) {
    return (
        <div className={cn(
            "py-[20px] px-[30px] h-[370px] rounded-2xl flex flex-col justify-between",
            'hover:scale-101 transition-transform duration-300 cursor-pointer'
        )} style={{ background: obj.bgColor }} onClick={() => setIdShowBigElem(obj.projectId)}>
            <Logo obj={obj} />
            <div className='text-white mt-[20px] mb-[40px]'>{obj.desc}</div>
            <div className={cn(
                'group w-fit flex items-center gap-x-[10px] text-white/50',
                'hover:text-white transition-all duration-300 cursor-pointer'
            )} onClick={(e) => e.stopPropagation()}>
                {obj.link}
                <ArrowUpRight strokeWidth={1} className={cn(
                    'group-hover:translate-x-[3px] group-hover:translate-y-[-3px] transition-all duration-300'
                )} />
            </div>
        </div>
    )
}