import { cn } from "@/lib/utils"
import { SortValue } from "../Filters"
import { type Status } from "@/types/project"

type Props = {
    sort: SortValue
    setSort: (value: SortValue) => void
}

type OrderStatus = {
    id: number,
    text: string,
    status: Status
}

const listStatus: OrderStatus[] = [
    { id: 1, status: 'COMPLETED', text: 'Выполнен' },
    { id: 2, status: 'IN_DEVELOPMENT', text: 'В разработке' },
]

export function Status({ sort, setSort }: Props) {
    const clickSort = (type: Status) => {
        setSort({ ...sort, order: type })
    }

    return (
        listStatus.map((obj, index) => {
            return (
                <div key={index} className={cn(
                    'hover:scale-101 hover:bg-[#151515] py-[10px] rounded-2xl',
                    'transition-transform duration-300 cursor-pointer',
                    'text-center text-white w-[200px]',
                )} onClick={() => clickSort(obj.status)}>
                    {obj.text}
                </div>
            )
        })
    )
}