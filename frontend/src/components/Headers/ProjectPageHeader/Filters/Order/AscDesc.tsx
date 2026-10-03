import { ChevronDown, ChevronUp } from "lucide-react"
import { JSX } from "react/jsx-runtime"

import { cn } from "@/lib/utils"
import { SortValue } from "../Filters"
import { SortOrder } from "../../../../../../../backend/src/generated/prisma/internal/prismaNamespace"

type Props = {
    sort: SortValue
    setSort: (value: SortValue) => void,

    type: 'startOfDevelopment' | 'endOfDevelopment'
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

export function AscDesc({ sort, setSort, type }: Props) {
    const clickSort = (type: SortOrder) => {
        setSort({ ...sort, order: type })
    }

    return (
        <div className='flex flex-col gap-y-[10px]'>
            {
                listOrder.map((obj, index) => {
                    return (
                        <div key={index} className={cn(
                            'w-[200px] bg-[#151515] rounded-2xl',
                            'transition-padding duration-300',
                            'text-white flex justify-center',
                            sort.order === obj.type
                                ? 'py-[2px]'
                                : 'group py-[5px] hover:scale-101 cursor-pointer'
                        )} onClick={() => clickSort(obj.type)}>
                            <div className={cn(
                                "h-[60px] rounded-2xl flex justify-center items-center transition-colors duration-300",
                                obj.id === 2 ? 'flex-col-reverse' : 'flex-col',
                                (sort.order === obj.type && sort.field === type)
                                    ? 'bg-bg'
                                    : 'group-hover:bg-bg'
                            )}>
                                {obj.icon}
                                <div className={cn(
                                    'text-center',
                                    sort.order === obj.type
                                        ? 'w-[196px]'
                                        : 'w-[190px]'
                                )}>{obj.text}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}