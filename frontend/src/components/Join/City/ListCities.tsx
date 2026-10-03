'use client'

import { useGetCities } from "@/hooks/useGetCities"
import { cn } from "@/lib/utils"
import { EmptyList } from "./EmptyList"

type Props = {
    value: string,
    open: boolean
}

export function ListCities({ value, open }: Props) {

    const { error, listCities, loading } = useGetCities(value)

    if (!listCities) return <EmptyList open={open} />

    return (
        <div className={cn(
            'z-10 bg-bg px-[20px] py-[10px] rounded-2xl w-[600px] text-white text-[18px]',
            'flex flex-col gap-y-[10px]',
            'absolute top-[120px] transition-[opacity,h] duration-300',
            open
                ? 'opacity-100 h-[250px] overflow-y-auto'
                : 'opacity-0 h-[0px] invisible'
        )}>
            {
                listCities.map((obj, index) => {
                    return (
                        <div key={index} className={cn(
                            'flex justify-between',
                            'hover:scale-101 transition-transform duration-300 cursor-pointer'
                        )}>
                            <div className=''>{obj.name}</div>
                            <span className="text-gray-400 text-[14px] whitespace-nowrap">
                                {obj.countUniversity} университетов
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}