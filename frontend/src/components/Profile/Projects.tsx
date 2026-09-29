'use client'

import { useGetProjectsForProfile } from "@/hooks/useGetProjectsForProfile"
import { CreatorSlug } from "../../../../backend/prisma/constans"
import { ClipLoaderUI } from "../UI/ClipLoader"
import { ProjectElem } from "../UI/ProjectElem/ProjectElem"
import ProjectModal from "../OurProjects/Modal/ProjectModal"
import { cn } from "@/lib/utils"
import useModalProject from "@/store/modalProject/modalStore"

type Props = {
    creatorSlug: CreatorSlug,
    creatorName: string
}

export function Projects(props: Props) {
    const { setShowIdModal, showIdModal } = useModalProject()
    const { error, listProjects, loading, } = useGetProjectsForProfile(props.creatorSlug)

    if (loading) return <ClipLoaderUI />
    if (!listProjects || listProjects.length < 1) return

    return (
        <>
            <div className=''>
                <div className='text-[25px] text-white mb-[20px] text-center'>
                    Проекты в которых {props.creatorName} принимала участие:
                </div>
                <div className={cn(
                    "grid grid-cols-2 gap-y-[20px] gap-x-[20px] h-[calc(100vh-80px)] overflow-y-auto",
                    'pb-[20px] px-[5px]'
                )}>
                    {
                        listProjects
                            .map((obj, index) => <ProjectElem key={index} isSmall obj={obj} setShowIdModal={setShowIdModal} />)
                    }
                </div>
            </div>
            {showIdModal &&
                <ProjectModal obj={listProjects.find(obj => obj.projectId === showIdModal)!}
                    setShowIdModal={setShowIdModal} showIdModal={showIdModal} />
            }
        </>
    )
}