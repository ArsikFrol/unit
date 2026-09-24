'use client'

import Title from "../UI/Title"
import { cn } from "@/lib/utils"
import { useGetProjects } from "@/hooks/useGetProjects"
import { useTypedRouter } from "@/hooks/useTypedRouter"
import ProjectModal from "./Modal/ProjectModal"
import { ProjectElem } from "@/components/UI/ProjectElem/ProjectElem"

type Props = {
    idShowBigElem: string,
    setIdShowBigElem: (value: string) => void
}

export default function OurProjects(props: Props) {
    const router = useTypedRouter()

    const { listProjects } = useGetProjects()

    const clickSeeMore = () => {
        router.push('/projects')
    }

    if (!listProjects) return;

    return (
        <div className="mb-[100px]" id='projects'>
            <Title title="Наши проекты" />
            <div className='grid grid-cols-2 gap-x-[20px] gap-y-[20px]'>
                {
                    listProjects
                        .slice(0, 4)
                        .map((obj, index) => <ProjectElem key={index} isSmall={false}
                            obj={obj} setIdShowBigElem={props.setIdShowBigElem} />)
                }
            </div>
            <div className={cn(
                'bg-white/70 h-[50px] text-[25px] w-[450px] flex items-center justify-center mx-auto mt-[50px] rounded-2xl',
                'hover:scale-101 hover:bg-white transition-all duration-300 cursor-pointer'
            )} onClick={clickSeeMore}>
                Увидеть больше проектов
            </div>
            {props.idShowBigElem
                ? <ProjectModal obj={listProjects.find(obj => obj.projectId === props.idShowBigElem)!}
                    setIdShowBigElem={props.setIdShowBigElem} />
                : undefined
            }
        </div>
    )
}