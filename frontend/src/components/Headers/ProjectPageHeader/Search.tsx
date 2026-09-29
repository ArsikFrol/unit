import { X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Filters } from "./Filters/Filters"

type Props = {
    value: string,
    setValue: (value: string) => void
}

export function Search({ value, setValue }: Props) {
    const clickX = () => {
        setValue('')
    }

    return (
        <div className="relative w-[900px] flex items-center gap-x-[20px]">
            <input type="text" value={value} placeholder="Введите название проекта или его описание" autoFocus
                onChange={e => setValue(e.target.value)} spellCheck="false"
                className={cn(
                    'w-[700px] h-[50px] bg-bg rounded-2xl px-[20px] pr-[50px] focus:outline-0',
                    'text-[16px] text-white'
                )} />
            <X size={35} strokeWidth={1} onClick={clickX} className={cn(
                'absolute left-[650px] top-[7px]',
                'text-white transition-all duration-300 hover:scale-105 cursor-pointer',
                value
                    ? 'opacity-100 translate-x-[0px]'
                    : 'opacity-0 translate-x-[5px]'
            )} />
            <Filters />
        </div>
    )
}