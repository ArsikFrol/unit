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
        <div className='flex flex-col gap-y-[10px]'>
            {
                listOrder.map((obj, index) => {
                    return (
                        <div key={index} className={cn(
                            'group w-[200px] py-[5px] bg-[#151515] rounded-2xl',
                            'hover:scale-101 transition-transform duration-300 cursor-pointer',
                            'text-white flex justify-center'
                        )} onClick={() => clickSort(obj.type)}>
                            <div className={cn(
                                "h-[60px] group-hover:bg-bg rounded-2xl flex justify-center items-center",
                                obj.id === 2 ? 'flex-col-reverse' : 'flex-col'
                            )}>
                                {obj.icon}
                                <div className='w-[190px] text-center'>{obj.text}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}