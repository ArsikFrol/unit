import { cn } from "@/lib/utils";
import { type Technology } from "@/types/technology";
import { Dispatch, SetStateAction } from "react";

type Props = {
    obj: Technology,
    setListAddTech: Dispatch<SetStateAction<Technology[]>>,
    clickAddTech: (obj: Technology) => void
}

export function TechnologyElem({ obj, clickAddTech }: Props) {
    return (
        <div className={cn(
            "rounded-2xl px-[10px] py-[5px] w-fit h-[35px]",
            'hover:translate-y-[-1px] transition-transform duration-300 cursor-pointer'
        )} style={{
            background: obj.bgColor ?? 'black',
            color: obj.colorText ?? 'white'
        }} onClick={() => clickAddTech(obj)}>
            {obj.name}
        </div>
    )
}