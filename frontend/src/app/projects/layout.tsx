'use client'

import { useState } from "react";

import { ProjectPageHeader } from "@/components/Headers/ProjectPageHeader/ProjectPageHeader";
import Page from "./page";

export default function Layout({children}: LayoutProps<"/">) {
    
    const [value, setValue] = useState<string>('')
    
    return(
        <>
            <ProjectPageHeader setValue={setValue} value={value} />
            <div className="h-[calc(100vh-100px)]">
                <Page value={value}/>
            </div>
        </>
    )
}