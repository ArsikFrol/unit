import { cn } from "@/lib/utils"
import { SortValue } from "./Filters"

type Props = {
    sort: SortValue,
    setSort: (value: SortValue) => void
}

export function Btns({ sort, setSort }: Props) {
    const clickCancel = () => {
        setSort({ field: '', order: '' })
    }

    return (
        <div className=''>
            <div className={cn(
                'overflow-hidden transition-[max-height,opacity] duration-300',
                "bg-gray-500 text-white rounded-2xl py-[10px] w-[200px] mt-[20px] mb-[10px] mx-auto text-center",
                'hover:translate-y-[-2px] transition-[translate] duration-300 cursor-pointer',
                sort.order === '' ? 'max-h-[50px] opacity-100' : 'max-h-0 opacity-0'
            )}>
                Закрыть
            </div>
            <div className={cn(
                'w-[600px] flex justify-center items-center gap-x-[20px]',
                'transition-[opacity,max-height] duration-300',
                sort.order === ''
                    ? 'opacity-0 max-h-0 max-w-0'
                    : 'opacity-100 max-h-[50px] max-w-[600px]'
            )}>
                <div className={cn(
                    'bg-blue-500 text-white rounded-2xl py-[10px] w-[200px] mt-[20px] mb-[10px]',
                    'text-center text-[18px]',
                    'hover:translate-y-[-2px] transition-[translate] duration-300 cursor-pointer'
                )}>
                    Сохранить
                </div>
                <div className={cn(
                    'bg-gray-500 text-white rounded-2xl py-[10px] w-[200px] mt-[20px] mb-[10px]',
                    'text-center text-[18px]',
                    'hover:translate-y-[-2px] transition-[translate] duration-300 cursor-pointer'
                )} onClick={clickCancel}>
                    Отменить
                </div>
            </div>
        </div>
    )

}