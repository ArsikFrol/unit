import { ChevronDown, ChevronUp } from "lucide-react"
import { JSX } from "react/jsx-runtime"

import { cn } from "@/lib/utils"
import { SortValue } from "../Filters"
import { SortOrder } from "../../../../../../../backend/src/generated/prisma/internal/prismaNamespace"

type Props = {
    sort: SortValue
    setSort: (value: SortValue) => void
}

type Order = {
    id: number,
    type: SortOrder,
    icon: JSX.Element,
    text: 'По возрастанию' | 'По убыванию'
}

const listOrder: Order[] = [
    { id: 1, type: 'asc', text: 'По возрастанию', icon: <ChevronUp /> },
    { id: 2, type: 'desc', text: 'По убыванию', icon: <ChevronDown /> }
]

export function AscDesc({ sort, setSort }: Props) {
    const clickSort = (type: SortOrder) => {
        setSort({ ...sort, order: type })
    }

    return (
        <div className='h-[142px] flex flex-col justify-between'>
            {
                listOrder.map((obj, index) => {
                    return (
                        <div key={index} className={cn(
                            'hover:scale-101 hover:bg-[#151515] py-[7px] rounded-2xl',
                            'transition-transform duration-300 cursor-pointer',
                            'text-center text-white w-[200px] flex items-center',
                            obj.id === 2 ? 'flex-col-reverse' : 'flex-col'
                        )} onClick={() => clickSort(obj.type)}>
                            {obj.icon}
                            <div className=''>{obj.text}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}