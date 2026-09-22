import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
    return (
        <div className={cn(
            "mx-auto mt-[20px]",
            '2xl:w-[1520px]',
            'xl:w-[1270px] max-xl:px-[20px]',
            'lg:w-[1010px]'
        )}>
            {children}
        </div>
    )
}