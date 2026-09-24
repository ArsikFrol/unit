'use client'

import { useState } from "react"

import { useGetProjectsForProfile } from "@/hooks/useGetProjectsForProfile"
import { CreatorSlug } from "../../../../backend/prisma/constans"
import { ClipLoaderUI } from "../UI/ClipLoader"
import { ProjectElem } from "../UI/ProjectElem/ProjectElem"
import ProjectModal from "../OurProjects/Modal/ProjectModal"

type Props = {
    creatorSlug: CreatorSlug,
    creatorName: string
}

export function Projects(props: Props) {
    const [idShowBigElem, setIdShowBigElem] = useState<string>('')

    const { error, listProjects, loading, } = useGetProjectsForProfile(props.creatorSlug)

    if (loading) return <ClipLoaderUI />
    if (!listProjects || listProjects.length < 1) return

    return (
        <>
            <div className=''>
                <div className='text-[25px] text-white'>Проекты в которых {props.creatorName} принимала участие</div>
                <div className="grid grid-cols-2 gap-x-[20px]">
                    {
                        listProjects
                            .map((obj, index) => <ProjectElem key={index} isSmall obj={obj} setIdShowBigElem={setIdShowBigElem} />)
                    }
                </div>
            </div>
            {idShowBigElem &&
                <ProjectModal obj={listProjects.find(obj => obj.projectId === idShowBigElem)!}
                    setIdShowBigElem={setIdShowBigElem} />
            }
        </>
    )
}