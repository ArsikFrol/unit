import { cn } from "@/lib/utils"
import { SortField, SortValue } from "./Filters"

type Props = {
    sort: SortValue,
    setSort: (value: SortValue) => void
}

type Field = {
    type: SortField,
    text: string
}

const listFields: Field[] = [
    { type: 'startOfDevelopment', text: 'По дате начала' },
    { type: 'endOfDevelopment', text: 'По дате финала' },
    /* { type: 'status', text: 'По статусу' } */
]

export function Fields({ setSort, sort }: Props) {

    const clickField = (field: SortField) => {
        setSort({ ...sort, field })
    }

    return (
        <div className='flex flex-col gap-y-[5px]'>
            <div className='w-[160px] flex flex-col gap-y-[5px] text-white bg-bg p-[5px] rounded-2xl'>
                {
                    listFields.map((obj, index) => {
                        return (
                            <div key={index} className={cn(
                                'hover:scale-101 hover:bg-[#151515] py-[10px] rounded-2xl',
                                'transition-transform duration-300 cursor-pointer',
                                'text-center',
                                sort.field === obj.type && 'bg-[#151515]'
                            )} onClick={() => clickField(obj.type)}>{obj.text}</div>
                        )
                    })
                }
            </div>
            <div className={cn(
                'group bg-bg rounded-2xl text-white',
                'hover:scale-101 p-[5px]',
                'cursor-pointer',
                'text-center',
                sort.field === 'status' && 'bg-[#151515]'
            )}>
                <div className='py-[10px] group-hover:bg-[#151515] rounded-2xl transition-transform duration-300 '>
                    По статусу
                </div>
            </div>
            <div className={cn(
                'group bg-bg rounded-2xl text-white',
                'hover:scale-101 p-[5px]',
                'cursor-pointer',
                'text-center',
                sort.field === 'status' && 'bg-[#151515]'
            )}>
                <div className='py-[10px] group-hover:bg-[#151515] rounded-2xl transition-transform duration-300 '>
                    По технологиям
                </div>
            </div>
        </div>
    )
}