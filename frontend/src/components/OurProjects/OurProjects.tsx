'use client'

import { useRef, useState } from "react"

import Title from "../UI/Title"
import Elem from "./Elem"
import { cn } from "@/lib/utils"
import ProjectModal from "./ProjectModal"
import { useGetProjects } from "@/hooks/useGetProjects"

type Props = {
    idShowBigElem: string,
    setIdShowBigElem: (value: string) => void
}

export default function OurProjects(props: Props) {
    const [showAllElem, setShowAllElem] = useState<boolean>(false)
    const firstElemRef = useRef<HTMLDivElement>(null)

    const { listProjects } = useGetProjects()

    const handleToggle = () => {
        setShowAllElem((prev) => !prev)

        if (showAllElem) requestAnimationFrame(() => {
            firstElemRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            })
        })
    }

    console.log(listProjects)

    if (!listProjects) return

    return (
        <div className="mb-[100px]" id='projects'>
            <Title title="Наши проекты" />
            <div className='grid grid-cols-2 gap-x-[20px] gap-y-[20px]'>
                {
                    listProjects.map((obj, index) => {
                        const hidden = !showAllElem && index >= 4
                        return (
                            <div key={index} className={cn(
                                'transition-all duration-500 ease-out',
                                hidden
                                    ? 'opacity-0 scale-95 max-h-0 overflow-hidden pointer-events-none'
                                    : 'opacity-100 scale-100 max-h-[370px]'
                            )} ref={index === 0 ? firstElemRef : undefined}>
                                <Elem obj={obj} setIdShowBigElem={props.setIdShowBigElem} />
                            </div>
                        )
                    })
                }
            </div>
            <div className={cn(
                'bg-white/70 h-[50px] text-[25px] w-[450px] flex items-center justify-center mx-auto mt-[50px] rounded-2xl',
                'hover:scale-101 hover:bg-white transition-all duration-300 cursor-pointer'
            )} onClick={handleToggle}>
                {showAllElem
                    ? 'Скрыть некоторые проекты'
                    : 'Показать больше проектов'
                }
            </div>
            {props.idShowBigElem
                ? <ProjectModal obj={listProjects.find(obj => obj.projectId === props.idShowBigElem)!}
                    setIdShowBigElem={props.setIdShowBigElem} />
                : undefined
            }
        </div>
    )
}