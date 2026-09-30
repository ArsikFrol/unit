import { cn } from "@/lib/utils"
import { SortField, SortValue } from "./Filters"
import { JSX } from "react/jsx-runtime"
import { Check } from "lucide-react"

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
]

export function Fields({ setSort, sort }: Props) {

    const clickField = (field: SortField) => {
        setSort({ ...sort, field })
    }

    return (
        <div className='flex flex-col gap-y-[5px]'>
            <div className={cn(
                'w-[160px] flex flex-col gap-y-[5px] text-white bg-[#151515] rounded-2xl',
                sort.field === 'startOfDevelopment' || sort.field === 'endOfDevelopment'
                    ? 'p-[2px]'
                    : 'p-[5px]'
            )}>
                {
                    listFields.map((obj, index) => {
                        return (
                            <div key={index} className={cn(
                                'rounded-2xl transition-transform duration-300 text-center',
                                sort.field === obj.type 
                                    ? 'bg-bg py-[13px]' 
                                    : 'py-[10px]  hover:scale-101 hover:bg-bg cursor-pointer'
                            )} onClick={() => clickField(obj.type)}>{obj.text}</div>
                        )
                    })
                }
            </div>
            <div className={cn(
                'bg-[#151515] rounded-2xl text-white text-center',
                sort.field === 'status' 
                    ? 'p-[2px]' 
                    : 'group p-[5px] hover:scale-101 cursor-pointer '
            )} onClick={() => clickField('status')}>
                <div className={cn(
                    'group-hover:bg-bg rounded-2xl transition-transform duration-300',
                    sort.field === 'status' ? 'bg-bg' : 'hover:scale-101 hover:bg-bg cursor-pointer',
                    sort.field === 'status' ? 'py-[13px]' : 'py-[10px]'
                )}>
                    По статусу
                </div>
            </div>
            <div className={cn(
                'group bg-[#151515] rounded-2xl text-white',
                'hover:scale-101 p-[5px]',
                'cursor-pointer',
                'text-center',
                sort.field === 'status' && 'bg-[#151515]'
            )} onClick={() => clickField('technologies')}>
                <div className='py-[10px] group-hover:bg-bg rounded-2xl transition-transform duration-300 '>
                    По технологиям
                </div>
            </div>
        </div>
    )
}