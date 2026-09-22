import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { GetProject } from "@/types/project";

export function Link({obj}: {obj: GetProject}) {
    return(
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
    )
}