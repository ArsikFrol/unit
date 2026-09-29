'use client'

import { useRef, useState } from "react"
import { useClickAway } from "react-use"

import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import { Fields } from "./Fields"
import { Order } from "./Order/Order"
import { Status } from "@/types/project"

export type SortField =
    | 'startOfDevelopment'
    | 'endOfDevelopment'
    | 'status'

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
        <div className="relative">
            <div className={cn(
                "w-fit bg-bg px-[40px] h-[50px] rounded-2xl flex items-center gap-x-[10px]",
                'transition-transform duration-300 cursor-pointer',
                !showFilters && 'hover:translate-y-[-2px] '
            )} onClick={() => setShowFilters(!showFilters)}>
                <div className='text-[16px] text-white'>Фильтр</div>
                <ChevronDown color="white" size={30} strokeWidth={1} />
            </div>
            <div className={cn(
                '',
                'absolute top-[60px] left-1/2 -translate-x-1/2 flex',
                'transition-[opacity,width] duration-300',
                showFilters
                    ? 'opacity-100'
                    : 'opacity-0',
                sort.field
                    ? 'w-[380px] gap-x-[10px]'
                    : 'w-[170px]',
                sort.field === 'status' && 'items-center'
            )} ref={ref}>
                <Fields sort={sort} setSort={setSort} />
                <div className={cn(
                    'flex flex-col',
                    'transition-opacity duration-300',
                    sort.field ? 'opacity-100' : 'opacity-0',
                    sort.field !== 'status' && ' h-[142px]'
                )}>
                    <Order sort={sort} setSort={setSort} />
                </div>
            </div>
        </div>
    )
}