'use client'

import { useState } from "react"

import { cn } from "@/lib/utils"
import { SortValue } from "../../Filters"
import { type Technology } from "@/types/technology"
import { AddedElem } from "./AddedElem"
import { TechnologyElem } from "./TechnologyElem"

type Props = {
    sort: SortValue,
    setSort: (value: SortValue) => void
}

const listTechnologies: Technology[] = [
    { technologyId: '1', name: 'React', slug: 'react', iconUrl: '/icons/react.svg', bgColor: '#E7F1FF', colorText: '#087EA4' },
    { technologyId: '2', name: 'Next.js', slug: 'nextjs', iconUrl: '/icons/nextjs.svg', bgColor: '#F0F0F0', colorText: '#000000' },
    { technologyId: '3', name: 'TypeScript', slug: 'typescript', iconUrl: '/icons/typescript.svg', bgColor: '#E6F0FA', colorText: '#3178C6' },
    { technologyId: '4', name: 'TailwindCSS', slug: 'tailwindcss', iconUrl: '/icons/tailwind.svg', bgColor: '#E6FFFA', colorText: '#0EA5E9' },
    { technologyId: '5', name: 'PostgreSQL', slug: 'postgresql', iconUrl: '/icons/postgresql.svg', bgColor: '#EAF0FF', colorText: '#336791' },
    { technologyId: '6', name: 'Prisma', slug: 'prisma', iconUrl: '/icons/prisma.svg', bgColor: '#E8F0FE', colorText: '#2D3748' },
    { technologyId: '7', name: 'Node.js', slug: 'nodejs', iconUrl: '/icons/nodejs.svg', bgColor: '#EAF7E6', colorText: '#3C873A' },
    { technologyId: '8', name: 'Docker', slug: 'docker', iconUrl: '/icons/docker.svg', bgColor: '#E6F0FA', colorText: '#2496ED' },
    { technologyId: '9', name: 'Figma', slug: 'figma', iconUrl: '/icons/figma.svg', bgColor: '#FDE8F1', colorText: '#A259FF' },
    { technologyId: '10', name: 'GraphQL', slug: 'graphql', iconUrl: '/icons/graphql.svg', bgColor: '#FCE7F3', colorText: '#E10098' },
    { technologyId: '7', name: 'Node.js', slug: 'nodejs', iconUrl: '/icons/nodejs.svg', bgColor: '#EAF7E6', colorText: '#3C873A' },
    { technologyId: '8', name: 'Docker', slug: 'docker', iconUrl: '/icons/docker.svg', bgColor: '#E6F0FA', colorText: '#2496ED' },
    { technologyId: '9', name: 'Figma', slug: 'figma', iconUrl: '/icons/figma.svg', bgColor: '#FDE8F1', colorText: '#A259FF' },
    { technologyId: '10', name: 'GraphQL', slug: 'graphql', iconUrl: '/icons/graphql.svg', bgColor: '#FCE7F3', colorText: '#E10098' },
    { technologyId: '7', name: 'Node.js', slug: 'nodejs', iconUrl: '/icons/nodejs.svg', bgColor: '#EAF7E6', colorText: '#3C873A' },
    { technologyId: '8', name: 'Docker', slug: 'docker', iconUrl: '/icons/docker.svg', bgColor: '#E6F0FA', colorText: '#2496ED' },
    { technologyId: '9', name: 'Figma', slug: 'figma', iconUrl: '/icons/figma.svg', bgColor: '#FDE8F1', colorText: '#A259FF' },
    { technologyId: '10', name: 'GraphQL', slug: 'graphql', iconUrl: '/icons/graphql.svg', bgColor: '#FCE7F3', colorText: '#E10098' },
    { technologyId: '7', name: 'Node.js', slug: 'nodejs', iconUrl: '/icons/nodejs.svg', bgColor: '#EAF7E6', colorText: '#3C873A' },
    { technologyId: '8', name: 'Docker', slug: 'docker', iconUrl: '/icons/docker.svg', bgColor: '#E6F0FA', colorText: '#2496ED' },
    { technologyId: '9', name: 'Figma', slug: 'figma', iconUrl: '/icons/figma.svg', bgColor: '#FDE8F1', colorText: '#A259FF' },
    { technologyId: '10', name: 'GraphQL', slug: 'graphql', iconUrl: '/icons/graphql.svg', bgColor: '#FCE7F3', colorText: '#E10098' },
]

export function Technologies({sort, setSort}: Props) {
    const [listAddTech, setListAddTech] = useState<Technology[]>([])
    
    return(
        <div className="">
            <input type="text" placeholder="Технология..." className={cn(
                'w-[400px] px-[15px] h-[45px] focus:outline-0 border-2 border-[#151515] rounded-2xl',
                'text-white'
            )}/>
            <div className="w-[200px] bg-[#151515] rounded-2xl p-[10px] ">
                {listAddTech.length
                    ? listAddTech.map((obj, i) => <AddedElem key={i} obj={obj} />)
                    : <span className="text-white text-[14px]">Выберите технологию</span>
                }
            </div>
            <div className={cn(
                "flex flex-wrap gap-x-[5px] gap-y-[5px] mt-[20px] h-[200px] overflow-y-hidden"
            )}>
                { 
                    listTechnologies.map((obj, i) => <TechnologyElem key={i} obj={obj} setListAddTech={setListAddTech} />)
                }
            </div>
        </div>
    )
}