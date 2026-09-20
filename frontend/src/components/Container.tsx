import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Container({children}: {children: ReactNode}) {
    return(
        <div className={cn(
            "mx-auto mt-[20px]",
            'xl:w-[1380px]'
        )}>
            {children}
        </div>
    )
}