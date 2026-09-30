'use client'

import { ListProjects } from "@/components/ListProjects/ListProjects"
import { useSearchProjects } from "@/hooks/useSearchProjects"
import ProjectModal from "@/components/OurProjects/Modal/ProjectModal"
import useModalProject from "@/store/modalProject/modalStore"
import { Empty } from "@/components/ListProjects/Empty"
import { Loading } from "@/components/ListProjects/Loading"
import { Error } from "@/components/ListProjects/Error"

type Props = {
    value: string,
}

export default function Page({value}: Props) {
    const { setShowIdModal, showIdModal } = useModalProject()
    const { listProjects, loading, error } = useSearchProjects(value)

    if (loading) return <Loading />
    if (error) return <Error />
    if (!listProjects || listProjects.length === 0) return <Empty />

    return (
        <>
            <ListProjects listProjects={listProjects} setShowIdModal={setShowIdModal} />
            {showIdModal &&
                <ProjectModal obj={listProjects.find(obj => obj.projectId === showIdModal)!}
                    setShowIdModal={setShowIdModal} showIdModal={showIdModal} />
            }
        </>
    )
}