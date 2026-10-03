'use client'

import { useCallback, useState } from "react"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"
import { SortValue } from "../../Filters"
import { type Technology } from "@/types/technology"
import { AddedElem } from "./AddedElem"
import { TechSlug } from "../../../../../../../../backend/prisma/constans"
import { ListTechnologies } from "./ListTechnologies/ListTechnologies"

type Props = {
    sort: SortValue,
    setSort: (value: SortValue) => void
}

export function Technologies({ sort, setSort }: Props) {
    const [listAddTech, setListAddTech] = useState<Technology[]>([])
    const [valueSearch, setValueSearch] = useState<string>('')

    const clickRemoveTech = useCallback((slug: TechSlug) => {
        setListAddTech(listAddTech.filter((obj) => obj.slug !== slug))
    }, [listAddTech])

    const clickX = () => {
        setValueSearch('')
    }

    return (
        <div className="">
            <div className='relative'>
                <input type="text" placeholder="Технология..." className={cn(
                    'w-[410px] pl-[15px] pr-[50px] h-[45px] focus:outline-0 border-2 border-[#151515] rounded-2xl',
                    'text-white'
                )} value={valueSearch} onChange={(e) => setValueSearch(e.target.value)} />
                <X size={35} strokeWidth={1} onClick={clickX} className={cn(
                    'absolute right-[10px] top-[5px]',
                    'text-white transition-all duration-300 hover:scale-105 cursor-pointer',
                    valueSearch
                        ? 'opacity-100 translate-x-[0px]'
                        : 'opacity-0 translate-x-[5px]'
                )} />
            </div>
            <div className={cn(
                "w-full flex flex-wrap gap-[5px] mt-[20px] bg-[#151515] rounded-2xl px-[10px] py-[15px]",
                'max-h-[140px] overflow-y-auto'
            )}>
                {listAddTech.length
                    ? listAddTech.map((obj, i) => <AddedElem key={i} obj={obj} clickRemoveTech={clickRemoveTech} />)
                    : <span className="text-white leading-[35px] mx-auto">Выберите технологии</span>
                }
            </div>
            <ListTechnologies value={valueSearch} listAddTech={listAddTech} setListAddTech={setListAddTech} />
        </div>
    )
}