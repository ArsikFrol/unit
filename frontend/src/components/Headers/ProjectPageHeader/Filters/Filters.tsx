'use client'

import { useRef, useState } from "react"
import { useClickAway } from "react-use"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Fields } from "./Fields"
import { Order } from "./Order/Order"
import { Status } from "@/types/project"

export type SortField =
    | 'startOfDevelopment'
    | 'endOfDevelopment'
    | 'status'
    | 'technologies'

export type SortOrder = 'asc' | 'desc' | Status

export type SortValue = {
    field: SortField | ''
    order: SortOrder | ''
}

export function Filters() {
    const ref = useRef<HTMLDivElement>(null)

    const [showFilters, setShowFilters] = useState<boolean>(false)

    const [sort, setSort] = useState<SortValue>({
        field: '',
        order: ''
    })

    useClickAway(ref, () => {
        setShowFilters(false)
        setSort(() => ({ field: '', order: '' }))
    })

    return (
        <div className="relative"  ref={ref}>
            <div className={cn(
                "w-fit bg-bg px-[40px] h-[50px] rounded-2xl flex items-center gap-x-[10px]",
                'transition-transform duration-300 cursor-pointer',
                !showFilters && 'hover:translate-y-[-2px] '
            )} onClick={() => setShowFilters(!showFilters)}>
                <div className='text-[16px] text-white'>Фильтр</div>
                <ChevronDown color="white" size={30} strokeWidth={1} />
            </div>
            <div className={cn(
                'bg-bg rounded-2xl p-[5px]',
                'absolute top-[60px] left-1/2 -translate-x-1/2 flex items-center',
                'transition-[opacity,width] duration-300',
                showFilters
                    ? 'opacity-100'
                    : 'opacity-0',
                sort.field
                    ? 'gap-x-[10px]'
                    : 'w-[170px]',
                sort.field === 'technologies' && 'w-[580px]',
                sort.field !== 'technologies' && 'w-[380px]'
            )}>
                <Fields sort={sort} setSort={setSort} />
                <div className={cn(
                    'flex flex-col',
                    'transition-opacity duration-300',
                    sort.field ? 'opacity-100' : 'opacity-0'
                )}>
                    <Order sort={sort} setSort={setSort} />
                </div>
            </div>
        </div>
    )
}