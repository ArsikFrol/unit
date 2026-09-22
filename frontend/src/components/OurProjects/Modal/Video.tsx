import { PlayIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { GetProject } from "@/types/project";

export function Video({obj}: {obj: GetProject}) {
    return(
        <div className='relative w-full h-[400px] bg-gray-600 rounded-2xl'>
            <PlayIcon size={50} strokeWidth={1.5}
                className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                    'hover:scale-105 transition-transform duration-300 cursor-pointer'
                )} />
        </div>
    )
}