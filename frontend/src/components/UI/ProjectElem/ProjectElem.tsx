import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { GetProject } from "@/types/project";
import Logo from "./Logo";

type Props = {
    obj: GetProject,
    setIdShowBigElem: (value: string) => void,

    isSmall: boolean
}

export function ProjectElem({ obj, setIdShowBigElem, isSmall }: Props) {
    return (
        <div className={cn(
            "py-[20px] px-[30px] rounded-2xl flex flex-col justify-between",
            'hover:scale-101 transition-transform duration-300 cursor-pointer',
            isSmall ? 'h-[300px]' : 'h-[350px]'
        )} style={{ background: obj.bgColor }} onClick={() => setIdShowBigElem(obj.projectId)} >
            <Logo obj={obj} isSmall={isSmall} />
            <div className={cn(
                'text-white overflow-y-auto',
                isSmall ? 'max-h-[105px]' : 'max-h-[85px]'
            )}>{obj.description}</div>
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