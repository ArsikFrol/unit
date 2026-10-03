'use client'

import { Dispatch, SetStateAction, useCallback } from "react";

import { cn } from "@/lib/utils";
import { Technology } from "@/types/technology";
import { useGetTechnologies } from "@/hooks/useGetTechnologies";
import { Empty } from "./Empty";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { TechnologyElem } from "./TechnologyElem";

type Props = {
    listAddTech: Technology[],
    setListAddTech: Dispatch<SetStateAction<Technology[]>>,
    value: string
}

export function ListTechnologies({ listAddTech, setListAddTech, value }: Props) {

    const { loading, error, listTechnologies } = useGetTechnologies(value)


    const clickAddTech = useCallback((obj: Technology) => {
        setListAddTech([...listAddTech, obj])
    }, [listAddTech])


    if (error) return <Error />
    if (loading) return <Loading />
    if (!listTechnologies) return <Empty />

    return (
        <div className={cn(
            "flex flex-wrap gap-[5px] mt-[20px] h-[140px] overflow-y-auto py-[2px]"
        )}>
            {
                listTechnologies.map((obj, i) => <TechnologyElem key={i} obj={obj} setListAddTech={setListAddTech}
                    clickAddTech={clickAddTech} />)
            }
        </div>
    )
}