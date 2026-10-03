import { Check, Clock } from "lucide-react"

import { cn } from "@/lib/utils"
import { SortValue } from "../Filters"
import { type Status } from "@/types/project"
import { JSX } from "react/jsx-runtime"

type Props = {
    sort: SortValue
    setSort: (value: SortValue) => void
}

type OrderStatus = {
    id: number,
    text: JSX.Element,
    status: Status
}

const listStatus: OrderStatus[] = [
    {
        id: 1, status: 'COMPLETED', text:
            <div className="flex items-center justify-center gap-x-[10px]">Выполнен <Check color="green" /></div>
    },
    {
        id: 2, status: 'IN_DEVELOPMENT', text:
            <div className="flex items-center justify-center gap-x-[10px]">В разработке <Clock /></div>
    },
]

export function Status({ sort, setSort }: Props) {
    const clickSort = (type: Status) => {
        setSort({ ...sort, order: type })
    }

    return (
        <div className="flex flex-col gap-y-[10px]">
            {
                listStatus.map((obj, index) => {
                    return (
                        <div key={index} className={cn(
                            'bg-[#151515] p-[5px] rounded-2xl',
                            'text-center text-white w-[200px]',
                            'group hover:scale-101 transition-transform duration-300 cursor-pointer'
                        )} onClick={() => clickSort(obj.status)}>
                            <div className={cn(
                                "hover:bg-bg rounded-2xl h-[50px] flex justify-center"
                            )}>
                                {obj.text}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}