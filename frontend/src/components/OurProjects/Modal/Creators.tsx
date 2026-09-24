'use client'

import { UserCircle2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { GetProject } from "@/types/project"
import { useTypedRouter } from "@/hooks/useTypedRouter"
import { CreatorSlug } from "../../../../../backend/prisma/constans"

export function Creators({ obj }: { obj: GetProject }) {
    const router = useTypedRouter()

    const clickCreator = (slug: CreatorSlug) => {
        router.push(`/creator/${slug}`)
    }

    return (
        <div className="flex gap-x-[10px] mt-[20px]">
            <div className='text-white leading-[40px]'>Разработчики: </div>
            <div className='grid grid-cols-4 w-full gap-y-[10px]'>
                {
                    obj.creators.map((creator, index) => {
                        console.log(creator.bgColor)
                        return (
                            <div key={index} className={cn(
                                'flex items-center gap-x-[5px] py-[7px] px-[15px] rounded-2xl w-[220px] justify-center',
                                'hover:scale-101 transition-transform duration-300 cursor-pointer'
                            )} onClick={() => clickCreator(creator.slug)}
                                style={{
                                    backgroundColor: creator.bgColor ?? 'black',
                                    color: creator.colorText ?? 'white'
                                }}>
                                <UserCircle2 size={30} strokeWidth={1} color={creator.colorText ?? 'white'} />
                                <div className=''>{creator.name}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}