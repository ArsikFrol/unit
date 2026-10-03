'use client'

import { useState } from "react"

import { useGetUniversities } from "@/hooks/useGetUniversities"
import { cn } from "@/lib/utils"

type Props = {

}

export function University(props: Props) {

    const [value, setValue] = useState<string>('')

    const { error, listUniversities, loading } = useGetUniversities(value)

    if (!listUniversities) return

    return (
        <div className="relative w-[600px] mx-auto">
            <input value={value} onChange={e => setValue(e.target.value)}
                spellCheck='false'
                className={cn(
                    'border border-white rounded-2xl py-[10px] px-[20px] w-full text-white text-[20px]',
                    'focus:outline-0',
                )} placeholder='Введите название университета' />
            <div className={cn(
                'absolute left-1/2 -translate-y-1/2',

            )}>
                {
                    listUniversities.map((obj, index) => {
                        return (
                            <div key={index} className={cn(
                                '',
                            )}>{obj.fullName}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}