'use client'

import { MoveLeft } from "lucide-react";

import { useTypedRouter } from "@/hooks/useTypedRouter";
import { cn } from "@/lib/utils";
import { Search } from "./Search";

type Props = {
    value: string,
    setValue: (value: string) => void
}

export function ProjectPageHeader(props: Props) {
    const router = useTypedRouter()

    return (
        <div className="sticky top-[0px] flex items-center justify-between py-[20px] px-[40px] bg-[#151515] z-10">
            <div className='w-[250px]'>
                <div className='group bg-bg rounded-2xl py-[10px] px-[20px] cursor-pointer w-fit'
                    onClick={() => router.push('/')}>
                    <MoveLeft color="white" size={40} strokeWidth={1}
                        className="group-hover:scale-101 group-hover:translate-x-[-5px] transition-all duration-300" />
                </div>
            </div>
            <Search setValue={props.setValue} value={props.value} />
            <div className={cn(
                "bg-white text-[18px] rounded-4xl h-[60px] flex items-center justify-center px-[40px]",
                'hover:scale-101 hover:bg-gray-100 transition-all duration-300 cursor-pointer'
            )}>Вступить в ЮНИТ</div>
        </div>
    )
}