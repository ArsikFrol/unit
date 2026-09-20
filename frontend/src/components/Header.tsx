'use client'

import Image from "next/image"

import logo from '../../public/logo.svg'
import { useTypedRouter } from "@/hooks/useTypedRouter"
import { cn } from "@/lib/utils"

export type IdNav = '#about' | '#projects' | '#hack'

type Nav = {
    id: IdNav,
    text: string,
}

const listNav: Nav[] = [
    {id: '#about', text: 'О ЮНИТ'},
    {id: '#projects', text: 'Проекты'},
    {id: '#hack', text: 'ЮНИТ.ХАК'},
]

export default function Header() {
    const router = useTypedRouter()
    
    const clickJoin = () => {
        router.push('/join')
    }

    return(
        <div className={cn(
            "bg-[#c4c4c4] rounded-4xl py-[3px] px-[3px] flex justify-between items-center",
            'w-[1380px] fixed top-[20px] left-1/2 -translate-x-1/2'
        )}>
            <Image alt="logo" src={logo} width={128} height={38} 
                className={cn(
                    "py-[8px] px-[20px] rounded-4xl",
                    'hover:scale-101 hover:bg-gray-200 transition-all duration-300 cursor-pointer'
                )} />
            <div className="flex gap-x-[30px] text-[20px]">
                {
                    listNav.map((obj: Nav, index) => {
                        return(
                            <a key={index} href={obj.id} className={cn(
                                'py-[7px] px-[20px] rounded-2xl',
                                'hover:scale-101 hover:bg-gray-200 transition-all duration-300 cursor-pointer'
                            )}>{obj.text}</a>
                        )
                    })
                }
                <div className={cn(
                    "bg-white rounded-4xl py-[7px] px-[20px]",
                     'hover:scale-101 hover:bg-gray-100 transition-all duration-300 cursor-pointer'
                )} onClick={clickJoin}>Вступить в ЮНИТ</div>
            </div>
        </div>
    )
}