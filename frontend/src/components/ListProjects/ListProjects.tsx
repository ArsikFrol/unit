'use client'

import { GetProject } from "@/types/project"
import { ProjectElem } from "../UI/ProjectElem/ProjectElem"

export function ListProjects(
    { listProjects, setIdShowBigElem }: { listProjects: GetProject[], setIdShowBigElem: (value: string) => void }
) {
    return (
        <div className="grid grid-cols-3 gap-x-[20px] gap-y-[20px] justify-items-center my-[50px] px-[40px]">
            {
                listProjects
                    .map((obj, index) => <ProjectElem key={index} isSmall obj={obj} setIdShowBigElem={setIdShowBigElem} />)
            }
        </div>
    )
}