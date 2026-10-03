'use client'

import { useState } from "react"

import { cn } from "@/lib/utils"
import { ListCities } from "./ListCities"

type Props = {

}

export function City(props: Props) {

    const [value, setValue] = useState<string>('')
    const [open, setOpen] = useState(false)

    return (
        <div className="relative w-[600px] mx-auto">
            <div className='text-white text-[36px] mb-[5px]'>
                Напишите город
                <span className="text-red-500"> *</span>
            </div>
            <input value={value} onChange={e => setValue(e.target.value)}
                onFocus={() => setOpen(true)}
                onBlur={() => setOpen(false)}
                spellCheck='false'
                className={cn(
                    'border border-white rounded-2xl py-[10px] px-[20px] w-full text-white text-[20px]',
                    'focus:outline-0',
                )} placeholder='Введите название города' />
            <ListCities value={value} open={open} />
        </div>
    )
}