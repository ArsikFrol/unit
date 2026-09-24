'use client'

import { useState } from "react";

import { ProjectPageHeader } from "@/components/Headers/ProjectPageHeader/ProjectPageHeader";
import { ListProjects } from "@/components/ListProjects/ListProjects";
import { useSearchProjects } from "@/hooks/useSearchProjects";
import { ClipLoaderUI } from "@/components/UI/ClipLoader";
import { cn } from "@/lib/utils";
import ProjectModal from "@/components/OurProjects/Modal/ProjectModal";
import { useTypedRouter } from "@/hooks/useTypedRouter";
import { useEscape } from "@/hooks/useEscape";

export default function page() {
    const router = useTypedRouter()

    const [value, setValue] = useState<string>('')
    const [idShowBigElem, setIdShowBigElem] = useState<string>('')

    const { listProjects, loading, error } = useSearchProjects(value)

    useEscape(() => router.push('/#projects'))

    if (loading) return <ClipLoaderUI />
    if (!listProjects || listProjects.length === 0) return (
        <div className="relative h-screen">
            <ProjectPageHeader setValue={setValue} value={value} />
            <div className={cn(
                'text-white text-[25px]',
                'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            )}>
                Список проектов пуст
            </div>
        </div>
    )

    return (
        <>
            <ProjectPageHeader setValue={setValue} value={value} />
            <ListProjects listProjects={listProjects} setIdShowBigElem={setIdShowBigElem} />
            {idShowBigElem &&
                <ProjectModal obj={listProjects.find(obj => obj.projectId === idShowBigElem)!}
                    setIdShowBigElem={setIdShowBigElem} />
            }
        </>
    )
}