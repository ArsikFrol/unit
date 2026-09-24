'use client'

import Image from "next/image"

import logo from '../../../public/logo.svg'
import { useTypedRouter } from "@/hooks/useTypedRouter"
import { cn } from "@/lib/utils"

type Props = {
    idShowBigElem: string
}

export type IdNav = 'about' | 'projects' | 'hack'

type Nav = {
    id: IdNav,
    text: string,
}

const listNav: Nav[] = [
    { id: 'about', text: 'О ЮНИТ' },
    { id: 'projects', text: 'Проекты' },
    { id: 'hack', text: 'ЮНИТ.ХАК' },
]

export default function Header(props: Props) {
    const router = useTypedRouter()

    const clickJoin = () => {
        router.push('/join')
    }

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id)
        if (!el) return

        const top = el.getBoundingClientRect().top + window.scrollY - 100

        window.scrollTo({
            top,
            behavior: 'smooth',
        })
    }

    return (
        <div className={cn(
            "sticky bg-[#c4c4c4] rounded-4xl py-[3px] px-[3px] flex justify-between items-center z-10",
            'w-[calc(100%-20px)] transition-all mx-auto my-[20px]',
            'top-[20px]',
            props.idShowBigElem
                ? 'opacity-0 -translate-y-[120%] pointer-events-none'
                : 'opacity-100 translate-y-0 pointer-events-auto'
        )}>
            <Image alt="logo" src={logo} width={128} height={38}
                className={cn(
                    "py-[8px] px-[20px] rounded-4xl",
                    'hover:scale-101 transition-all duration-300 cursor-pointer'
                )} onClick={() => scrollToSection('preview')} />
            <div className="flex gap-x-[30px] text-[20px]">
                {
                    listNav.map((obj: Nav, index) => {
                        return (
                            <a key={index} className={cn(
                                'py-[7px] px-[20px] rounded-2xl',
                                'hover:scale-101 hover:bg-gray-200 transition-all duration-300 cursor-pointer'
                            )} onClick={() => scrollToSection(obj.id)}>{obj.text}</a>
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